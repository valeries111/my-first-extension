
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand(
        'my-first-extension.countCharacters',
        () => {

            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                vscode.window.showInformationMessage(
                    'Сначала открой файл!'
                );
                return;
            }

            const selection = editor.selection;
            const text = editor.document.getText(selection);

            if (text.length === 0) {
                vscode.window.showInformationMessage(
                    'Сначала выдели текст!'
                );
                return;
            }

            let count = 0;

            for (let i = 0; i < text.length; i++) {
                const char = text[i];

                if ((char >= 'A' && char <= 'Z') ||
                    (char >= 'a' && char <= 'z')) {
                    count++;
                }
            }

            vscode.window.showInformationMessage(
                'Количество латинских букв: ' + count
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
