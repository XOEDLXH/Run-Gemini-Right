const vscode = require("vscode")

function activate(context){
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-hello.runGeminiCLI', async () => {
            try {
                // Check if there are existing terminals before creating a new one
                const hadTerminalsBefore = vscode.window.terminals.length > 0;

                // Create a new terminal
                const terminal = vscode.window.createTerminal({
                    name: 'Gemini CLI',
                    cwd: vscode.workspace.workspaceFolders?.[0]?.uri.fsPath
                });

                // Show the terminal (this will display it in the bottom panel)
                terminal.show();

                // Wait for the terminal to be ready
                await new Promise(resolve => setTimeout(resolve, 150));

                // Move the terminal to the editor area
                await vscode.commands.executeCommand('workbench.action.terminal.moveToEditor');

                // Wait for the move to complete
                await new Promise(resolve => setTimeout(resolve, 150));

                // Move the editor to the right group
                await vscode.commands.executeCommand('workbench.action.moveEditorToRightGroup');

                // Wait for the move to complete
                await new Promise(resolve => setTimeout(resolve, 150));

                // Close the bottom terminal panel only if there were no terminals before
                if (!hadTerminalsBefore) {
                    await vscode.commands.executeCommand('workbench.action.closePanel');
                }

                // Execute the gemini command in the terminal
                terminal.sendText('gemini');

            } catch (error) {
                vscode.window.showErrorMessage(`Failed to run Gemini CLI: ${error.message}`);
            }
        })
    )
}

module.exports = {activate}
