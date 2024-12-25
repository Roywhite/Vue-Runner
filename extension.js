const vscode = require('vscode');

let currentTerminal = null;
let statusBarItem = null;

function getConfig() {
    const config = vscode.workspace.getConfiguration('vueRunner');
    return {
        packageManager: config.get('packageManager') || 'pnpm',
        command: config.get('command') || 'dev'
    };
}

function activate(context) {
    // 创建状态栏项
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBarItem.hide();
    context.subscriptions.push(statusBarItem);

    // 初始化运行状态
    vscode.commands.executeCommand('setContext', 'vue-runner:isRunning', false);

    // 注册运行命令
    let runDisposable = vscode.commands.registerCommand('vue-runner.runDev', async () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showErrorMessage('请先打开一个工作区文件夹');
            return;
        }

        // 获取配置
        const { packageManager, command } = getConfig();

        // 如果已有终端，先关闭
        if (currentTerminal) {
            currentTerminal.dispose();
        }

        // 创建新终端
        currentTerminal = vscode.window.createTerminal({
            name: 'Vue Dev Server',
            hideFromUser: false
        });
        
        currentTerminal.show();
        currentTerminal.sendText(`${packageManager} ${command}`);
        
        // 更新状态
        vscode.commands.executeCommand('setContext', 'vue-runner:isRunning', true);
        updateStatusBar(true, packageManager, command);
    });

    // 注册终止命令
    let stopDisposable = vscode.commands.registerCommand('vue-runner.stopDev', async () => {
        if (currentTerminal) {
            if (process.platform === 'win32') {
                const killTerminal = vscode.window.createTerminal({
                    name: 'Kill Process',
                    hideFromUser: true
                });
                killTerminal.sendText('taskkill /F /IM node.exe');
                killTerminal.dispose();
            } else {
                currentTerminal.sendText('\u0003'); // Ctrl+C
            }
            
            currentTerminal.dispose();
            currentTerminal = null;
            
            // 更新状态
            vscode.commands.executeCommand('setContext', 'vue-runner:isRunning', false);
            updateStatusBar(false);
        }
    });

    // 注册显示终端命令
    let showTerminalDisposable = vscode.commands.registerCommand('vue-runner.showTerminal', () => {
        if (currentTerminal) {
            currentTerminal.show();
        }
    });

    // 监听终端关闭事件
    let terminalDisposable = vscode.window.onDidCloseTerminal(terminal => {
        if (terminal === currentTerminal) {
            currentTerminal = null;
            vscode.commands.executeCommand('setContext', 'vue-runner:isRunning', false);
            updateStatusBar(false);
        }
    });

    // 监听配置变化
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('vueRunner')) {
                if (currentTerminal) {
                    const { packageManager, command } = getConfig();
                    updateStatusBar(true, packageManager, command);
                }
            }
        })
    );

    context.subscriptions.push(runDisposable, stopDisposable, showTerminalDisposable, terminalDisposable);
}

function updateStatusBar(running, packageManager, command) {
    if (running) {
        statusBarItem.text = `$(terminal) Vue Dev Server Running (${packageManager} ${command})`;
        statusBarItem.tooltip = "点击查看开发服务器终端";
        statusBarItem.command = 'vue-runner.showTerminal';
        statusBarItem.show();
    } else {
        statusBarItem.hide();
    }
}

function deactivate() {
    if (currentTerminal) {
        vscode.commands.executeCommand('vue-runner.stopDev');
    }
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}

module.exports = {
    activate,
    deactivate
}; 