import * as vscode from "vscode";
import { findDependents } from "@ad2302/why-this-file";
import path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "vscode-why-this-file.why",
    () => {
      if (!vscode.window.activeTextEditor) {
        return; // no editor
      }
      const { document } = vscode.window.activeTextEditor;
      const filePath = document.uri.path;
      const root =  vscode.workspace.getWorkspaceFolder(document.uri);
      console.log("filePath:",filePath)
      console.log("root:",root?.uri.fsPath)
      const dependents = findDependents(filePath,root?.uri.fsPath);
      console.log("dependents:",dependents)
      const p = vscode.window.showQuickPick(dependents, {
        placeHolder: 'Select File',
        matchOnDetail: true,
      });
      p.then((value) => {
        if (!value) return;
        const fn = vscode.Uri.file(path.join(root?.uri.fsPath, value))
        vscode.workspace.openTextDocument(fn).then((doc) => {
          return vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
