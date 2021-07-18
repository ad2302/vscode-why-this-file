import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


	let disposable = vscode.commands.registerCommand('vscode-why-this-file.why', () => {
		if (!vscode.window.activeTextEditor) {
			return; // no editor
		  }
		  let { document } = vscode.window.activeTextEditor;
    if (document.uri.scheme !== myScheme) {
      return; // not my scheme
    }
	const filePath = document.uri.path
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
