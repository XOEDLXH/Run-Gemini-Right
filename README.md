# Run Gemini with Terminal Right

A Visual Studio Code extension that provides better integration for Gemini CLI by opening it in a split terminal view on the right side of your editor.

## Motivation

While Gemini is a powerful AI assistant, its integration with Visual Studio Code isn't optimal. This extension was created to improve the workflow by providing a dedicated toolbar button that opens Gemini CLI in a convenient split-view terminal, similar to how Claude Code works in VSCode.

## Features

- **One-Click Launch**: Click the Gemini icon in the editor toolbar to instantly launch Gemini CLI
- **Split Terminal View**: Opens Gemini in a split terminal on the right side of your editor, keeping your code visible
- **Smart Panel Management**: Intelligently manages the terminal panel - only closes it if you didn't have terminals open before, preserving your existing workflow
- **Always Accessible**: The Gemini icon remains visible in the toolbar at all times, regardless of focus state
- **Auto-activation**: The extension activates automatically when VSCode starts

## Installation

### From VSIX file

1. Download the `.vsix` file
2. Open VSCode
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette
4. Type "Install from VSIX" and select "Extensions: Install from VSIX..."
5. Select the downloaded `.vsix` file

### Prerequisites

- Visual Studio Code version 1.106.2 or higher
- Gemini CLI must be installed and available in your system PATH

## Usage

1. Open any file in VSCode
2. Look for the Gemini icon in the editor toolbar (top-right corner, below the close button)
3. Click the icon
4. A terminal with Gemini CLI will open on the right side of your editor
5. Start chatting with Gemini!

## How It Works

When you click the Gemini icon, the extension:
1. Creates a new terminal instance named "Gemini CLI"
2. Moves the terminal to the editor area
3. Positions it on the right side of your current editor
4. Closes the bottom terminal panel only if you didn't have any terminals open previously
5. Automatically executes the `gemini` command

## Command

- **Command ID**: `vscode-hello.runGeminiCLI`
- **Title**: Gemini CLI: Run

You can also run this command from the Command Palette (`Ctrl+Shift+P`) by typing "Gemini CLI: Run".

## Configuration

This extension works out of the box with no configuration required.

## Changelog

### Version 0.0.2
- **Improved Terminal Panel Behavior**: The extension now intelligently detects existing terminals. If you already have terminals open before clicking the Gemini button, the bottom terminal panel will remain open instead of being automatically closed. This prevents disrupting your existing workflow.

### Version 0.0.1
- Initial release
- One-click launch of Gemini CLI in split terminal view
- Automatic terminal positioning on the right side
- Clean workspace with automatic panel management

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Claude Code's terminal integration in VSCode
- Built for the Gemini CLI community
