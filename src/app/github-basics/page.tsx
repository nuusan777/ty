"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    id: "install-git",
    title: "Gitのインストール",
    icon: "💿",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          まずはGitをPCにインストールしましょう。OSごとに手順が異なります。
        </p>
        
        {/* Windows */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-400">🪟</span> Windows
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <div>
                <p className="text-white">Git for Windowsをダウンロード</p>
                <a
                  href="https://git-scm.com/download/win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  https://git-scm.com/download/win →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <div>
                <p className="text-white">ダウンロードしたインストーラーを実行</p>
                <p className="text-gray-400 text-sm">基本的に「Next」を押していけばOK</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <div>
                <p className="text-white">インストール完了</p>
                <p className="text-gray-400 text-sm">「Git Bash」と「Git CMD」が使えるようになります</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mac */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-gray-400">🍎</span> Mac
          </h4>
          <div className="space-y-3">
            <p className="text-gray-300 text-sm mb-3">ターミナルを開いて以下のコマンドを実行：</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">xcode-select --install</code>
              <p className="text-gray-500 text-xs mt-1">Xcode Command Line Toolsと一緒にインストールされます</p>
            </div>
            <p className="text-gray-400 text-sm">または Homebrew を使う場合：</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">brew install git</code>
            </div>
          </div>
        </div>

        {/* Linux */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-yellow-400">🐧</span> Linux (Ubuntu/Debian)
          </h4>
          <div className="bg-gray-900 rounded p-3">
            <code className="text-green-400 text-sm">sudo apt update && sudo apt install git</code>
          </div>
        </div>

        {/* 確認方法 */}
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
          <h5 className="font-bold text-green-300 mb-2">✅ インストール確認</h5>
          <p className="text-gray-300 text-sm mb-2">ターミナル（コマンドプロンプト）で以下を実行：</p>
          <div className="bg-gray-900 rounded p-3">
            <code className="text-green-400 text-sm">git --version</code>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            <code className="bg-gray-700 px-1 rounded">git version 2.xx.x</code> のように表示されればOK！
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "setup-git",
    title: "初期設定",
    icon: "⚙️",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          Gitをインストールしたら、最初に自分の情報を設定しましょう。
          この情報はコミット（変更の記録）に使われます。
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">🔧 必須の初期設定</h4>
          <div className="space-y-4">
            <div>
              <p className="text-white mb-2">1. ユーザー名を設定</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git config --global user.name "あなたの名前"</code>
              </div>
              <p className="text-gray-500 text-xs mt-1">例: git config --global user.name "Taro Yamada"</p>
            </div>
            <div>
              <p className="text-white mb-2">2. メールアドレスを設定</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git config --global user.email "your@email.com"</code>
              </div>
              <p className="text-gray-500 text-xs mt-1">GitHubで使うメールアドレスと同じにすると良い</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">📋 設定の確認</h4>
          <div className="bg-gray-900 rounded p-3">
            <code className="text-green-400 text-sm">git config --list</code>
          </div>
          <p className="text-gray-400 text-sm mt-2">設定した内容が一覧で表示されます</p>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
          <h5 className="font-bold text-yellow-300 mb-2">💡 --global オプションについて</h5>
          <p className="text-gray-300 text-sm">
            <code className="bg-gray-700 px-1 rounded">--global</code> をつけると、PC全体で使う設定になります。
            プロジェクトごとに別の設定をしたい場合は、そのフォルダ内で <code className="bg-gray-700 px-1 rounded">--global</code> なしで実行します。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "github-account",
    title: "GitHubアカウント作成",
    icon: "👤",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          GitHubを使うにはアカウントが必要です。無料で作成できます。
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">📝 アカウント作成手順</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <div>
                <p className="text-white">GitHubにアクセス</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  https://github.com →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <div>
                <p className="text-white">「Sign up」をクリック</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <div>
                <p className="text-white">必要な情報を入力</p>
                <ul className="text-gray-400 text-sm mt-1 space-y-1">
                  <li>• メールアドレス</li>
                  <li>• パスワード</li>
                  <li>• ユーザー名（英数字、公開されます）</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <div>
                <p className="text-white">メール認証</p>
                <p className="text-gray-400 text-sm">届いたメールのリンクをクリック</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
          <h5 className="font-bold text-blue-300 mb-2">💡 ユーザー名について</h5>
          <p className="text-gray-300 text-sm">
            ユーザー名はURLの一部になります（github.com/<strong>username</strong>）。
            本名でなくてもOKですが、覚えやすく、プロフェッショナルな印象のものがおすすめです。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "ssh-setup",
    title: "SSH接続の設定",
    icon: "🔑",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          SSH（Secure Shell）を使うと、毎回パスワードを入力せずにGitHubと安全に通信できます。
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">🔐 SSHキーの作成</h4>
          <div className="space-y-4">
            <div>
              <p className="text-white mb-2">1. SSHキーを生成</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">ssh-keygen -t ed25519 -C "your@email.com"</code>
              </div>
              <p className="text-gray-500 text-xs mt-1">Enterを押して進めます（パスフレーズは空でもOK）</p>
            </div>
            <div>
              <p className="text-white mb-2">2. SSHエージェントを起動</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">eval "$(ssh-agent -s)"</code>
              </div>
              <p className="text-gray-500 text-xs mt-1">Windowsの場合は Git Bash で実行</p>
            </div>
            <div>
              <p className="text-white mb-2">3. SSHキーを追加</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">ssh-add ~/.ssh/id_ed25519</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">📋 GitHubに公開鍵を登録</h4>
          <div className="space-y-4">
            <div>
              <p className="text-white mb-2">1. 公開鍵をコピー</p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">cat ~/.ssh/id_ed25519.pub</code>
              </div>
              <p className="text-gray-500 text-xs mt-1">表示された内容をすべてコピー</p>
            </div>
            <div>
              <p className="text-white mb-2">2. GitHubで登録</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• GitHub → Settings → SSH and GPG keys</li>
                <li>• 「New SSH key」をクリック</li>
                <li>• Titleに任意の名前（例: My PC）</li>
                <li>• Keyにコピーした内容を貼り付け</li>
                <li>• 「Add SSH key」をクリック</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
          <h5 className="font-bold text-green-300 mb-2">✅ 接続テスト</h5>
          <div className="bg-gray-900 rounded p-3">
            <code className="text-green-400 text-sm">ssh -T git@github.com</code>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            「Hi username! You&apos;ve successfully authenticated...」と表示されれば成功！
          </p>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
          <h5 className="font-bold text-yellow-300 mb-2">🔄 HTTPSを使う場合</h5>
          <p className="text-gray-300 text-sm">
            SSHの代わりにHTTPSでも接続できます。その場合は Personal Access Token を使います。
            Settings → Developer settings → Personal access tokens で作成できます。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "what-is-git",
    title: "Gitとは？",
    icon: "🔄",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          <span className="text-white font-bold">Git</span>は、ファイルの変更履歴を記録・追跡するための
          <span className="text-blue-400">バージョン管理システム</span>です。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">Gitでできること</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">変更履歴の記録</span>
                <p className="text-gray-400 text-sm">いつ、誰が、何を変更したか記録できます</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">過去の状態に戻す</span>
                <p className="text-gray-400 text-sm">問題が起きても以前の状態に簡単に戻せます</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">複数人での共同作業</span>
                <p className="text-gray-400 text-sm">チームで同時に開発を進められます</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">ブランチで並行開発</span>
                <p className="text-gray-400 text-sm">本番に影響せず新機能を開発できます</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
          <p className="text-gray-300 text-sm">
            💡 <span className="text-white font-medium">Git</span>はローカル（自分のPC）で動作し、
            <span className="text-white font-medium">GitHub</span>はGitの履歴をインターネット上で共有・保存するサービスです。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "what-is-github",
    title: "GitHubとは？",
    icon: "🐙",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          <span className="text-white font-bold">GitHub</span>は、Gitで管理しているプロジェクトを
          インターネット上で共有・公開できるサービスです。世界中の開発者が利用しています。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">GitHubの主な機能</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl mb-2">📁</div>
              <h5 className="font-bold text-white mb-1">リポジトリ</h5>
              <p className="text-gray-400 text-sm">プロジェクトのファイルと履歴を保存する場所</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl mb-2">🔀</div>
              <h5 className="font-bold text-white mb-1">プルリクエスト</h5>
              <p className="text-gray-400 text-sm">変更をレビューしてもらい統合する仕組み</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl mb-2">🐛</div>
              <h5 className="font-bold text-white mb-1">Issues</h5>
              <p className="text-gray-400 text-sm">バグ報告や機能要望を管理</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl mb-2">🤝</div>
              <h5 className="font-bold text-white mb-1">コラボレーション</h5>
              <p className="text-gray-400 text-sm">チームでの共同開発をサポート</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "basic-terms",
    title: "基本用語",
    icon: "📝",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          Git/GitHubを使う上で知っておくべき基本的な用語を覚えましょう。
        </p>
        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Repository</span>
              <span className="text-gray-400">リポジトリ</span>
            </div>
            <p className="text-gray-300 text-sm">プロジェクトのファイルと変更履歴を保存する場所。略して「リポ」や「レポ」とも。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Commit</span>
              <span className="text-gray-400">コミット</span>
            </div>
            <p className="text-gray-300 text-sm">変更を記録すること。セーブポイントのようなもの。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Branch</span>
              <span className="text-gray-400">ブランチ</span>
            </div>
            <p className="text-gray-300 text-sm">開発の分岐。メインに影響を与えずに作業できる。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Merge</span>
              <span className="text-gray-400">マージ</span>
            </div>
            <p className="text-gray-300 text-sm">ブランチの変更を別のブランチに統合すること。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Push</span>
              <span className="text-gray-400">プッシュ</span>
            </div>
            <p className="text-gray-300 text-sm">ローカルの変更をGitHubにアップロードすること。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Pull</span>
              <span className="text-gray-400">プル</span>
            </div>
            <p className="text-gray-300 text-sm">GitHubの最新の変更をローカルにダウンロードすること。</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Clone</span>
              <span className="text-gray-400">クローン</span>
            </div>
            <p className="text-gray-300 text-sm">GitHubのリポジトリを自分のPCにコピーすること。</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded font-mono text-sm">Fork</span>
              <span className="text-gray-400">フォーク</span>
            </div>
            <p className="text-gray-300 text-sm">他人のリポジトリを自分のアカウントにコピーすること。</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "basic-commands",
    title: "基本コマンド",
    icon: "⌨️",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          よく使うGitコマンドを覚えましょう。ターミナル（コマンドプロンプト）で実行します。
        </p>
        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div>
            <h4 className="text-white font-bold mb-3"> リポジトリの操作</h4>
            <div className="space-y-2">
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git init</code>
                <p className="text-gray-500 text-xs mt-1">新しいリポジトリを作成</p>
              </div>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git clone https://github.com/user/repo.git</code>
                <p className="text-gray-500 text-xs mt-1">リポジトリをコピー</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">💾 変更の保存</h4>
            <div className="space-y-2">
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git status</code>
                <p className="text-gray-500 text-xs mt-1">変更されたファイルを確認</p>
              </div>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git add .</code>
                <p className="text-gray-500 text-xs mt-1">すべての変更をステージング</p>
              </div>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git commit -m "変更内容の説明"</code>
                <p className="text-gray-500 text-xs mt-1">変更を記録（コミット）</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">🌐 GitHubとの同期</h4>
            <div className="space-y-2">
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git push origin main</code>
                <p className="text-gray-500 text-xs mt-1">変更をGitHubにアップロード</p>
              </div>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">git pull origin main</code>
                <p className="text-gray-500 text-xs mt-1">GitHubから最新を取得</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "workflow",
    title: "基本的な流れ",
    icon: "🔄",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          GitHubを使った開発の基本的なワークフローを理解しましょう。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">個人開発の基本フロー</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <div>
                <h5 className="text-white font-medium">ファイルを編集</h5>
                <p className="text-gray-400 text-sm">コードを書いたり、ファイルを変更します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <h5 className="text-white font-medium">git add .</h5>
                <p className="text-gray-400 text-sm">変更をステージング（コミット準備）</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <div>
                <h5 className="text-white font-medium">git commit -m "メッセージ"</h5>
                <p className="text-gray-400 text-sm">変更を記録（ローカルにセーブ）</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <div>
                <h5 className="text-white font-medium">git push</h5>
                <p className="text-gray-400 text-sm">GitHubにアップロード</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
          <h5 className="font-bold text-yellow-300 mb-2">💡 コミットメッセージのコツ</h5>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• 何を変更したか簡潔に書く</li>
            <li>• 「〜を追加」「〜を修正」「〜を削除」など動詞で始める</li>
            <li>• 例: "ログイン機能を追加" "バグを修正" "不要なコードを削除"</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "branch",
    title: "ブランチの使い方",
    icon: "🌿",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          ブランチを使うと、メインのコードに影響を与えずに新機能の開発やバグ修正ができます。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">ブランチのイメージ</h4>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
{`main ────●────●────●────●────●── (本番用)
              │              ↑
              │              │ (マージ)
              └──●────●────●─┘
                feature-login (新機能開発用)`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">ブランチ操作コマンド</h4>
          <div className="space-y-2">
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git branch</code>
              <p className="text-gray-500 text-xs mt-1">ブランチ一覧を表示</p>
            </div>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git branch feature-login</code>
              <p className="text-gray-500 text-xs mt-1">新しいブランチを作成</p>
            </div>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git checkout feature-login</code>
              <p className="text-gray-500 text-xs mt-1">ブランチを切り替え</p>
            </div>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git checkout -b feature-login</code>
              <p className="text-gray-500 text-xs mt-1">作成と切り替えを同時に</p>
            </div>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git merge feature-login</code>
              <p className="text-gray-500 text-xs mt-1">現在のブランチにマージ</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
          <h5 className="font-bold text-blue-300 mb-2">📌 よくあるブランチ名</h5>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><code className="bg-gray-700 px-1 rounded">main</code> または <code className="bg-gray-700 px-1 rounded">master</code> - 本番用</li>
            <li><code className="bg-gray-700 px-1 rounded">develop</code> - 開発用</li>
            <li><code className="bg-gray-700 px-1 rounded">feature/〇〇</code> - 新機能開発</li>
            <li><code className="bg-gray-700 px-1 rounded">fix/〇〇</code> - バグ修正</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "pullrequest",
    title: "プルリクエスト",
    icon: "🔀",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          プルリクエスト（PR）は、自分の変更を他の人にレビューしてもらい、
          mainブランチに取り込んでもらうための仕組みです。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">プルリクエストの流れ</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <div>
                <h5 className="text-white font-medium">ブランチを作成して作業</h5>
                <p className="text-gray-400 text-sm">feature-xxxブランチで開発</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <h5 className="text-white font-medium">GitHubにプッシュ</h5>
                <p className="text-gray-400 text-sm">git push origin feature-xxx</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <div>
                <h5 className="text-white font-medium">GitHubでPRを作成</h5>
                <p className="text-gray-400 text-sm">変更内容を説明してレビュー依頼</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <div>
                <h5 className="text-white font-medium">レビュー＆承認</h5>
                <p className="text-gray-400 text-sm">チームメンバーがコードをチェック</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <div>
                <h5 className="text-white font-medium">マージ</h5>
                <p className="text-gray-400 text-sm">mainブランチに変更を統合</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
          <h5 className="font-bold text-purple-300 mb-2">✨ 良いPRのポイント</h5>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• 変更内容をわかりやすく説明する</li>
            <li>• 1つのPRは1つの機能・修正に絞る</li>
            <li>• 変更が大きすぎないようにする</li>
            <li>• スクリーンショットがあると親切</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "tips",
    title: "よくあるトラブル",
    icon: "🆘",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          Git/GitHubでよくある問題と解決方法を知っておきましょう。
        </p>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-5">
            <h4 className="font-bold text-red-400 mb-2">❌ pushできない</h4>
            <p className="text-gray-400 text-sm mb-3">リモートに新しい変更があると発生します</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git pull origin main</code>
              <p className="text-gray-500 text-xs mt-1">先にpullしてからpush</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-5">
            <h4 className="font-bold text-red-400 mb-2">❌ コンフリクト（競合）が発生</h4>
            <p className="text-gray-400 text-sm mb-3">同じ箇所を複数人が編集すると発生</p>
            <div className="bg-gray-900 rounded p-3 text-sm">
              <p className="text-gray-300">1. ファイルを開いて競合箇所を確認</p>
              <p className="text-gray-300">2. どちらの変更を残すか選択</p>
              <p className="text-gray-300">3. git add → git commit</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-5">
            <h4 className="font-bold text-red-400 mb-2">❌ 直前のコミットを取り消したい</h4>
            <p className="text-gray-400 text-sm mb-3">間違えてコミットした場合</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git reset --soft HEAD~1</code>
              <p className="text-gray-500 text-xs mt-1">変更は残したままコミットだけ取り消し</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-5">
            <h4 className="font-bold text-red-400 mb-2">❌ 変更を全部取り消したい</h4>
            <p className="text-gray-400 text-sm mb-3">作業中の変更をすべて破棄</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm">git checkout .</code>
              <p className="text-gray-500 text-xs mt-1">⚠️ 注意: 変更が完全に消えます</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function GitHubBasicsPage() {
  const [activeSection, setActiveSection] = useState("install-git");

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームへ
            </Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <div>
              <span className="text-orange-400 text-sm font-medium">ガイド</span>
              <h1 className="text-xl font-bold text-white">Git/GitHub入門</h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* サイドバー */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-white mb-4">📚 目次</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    activeSection === section.id
                      ? "bg-orange-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
              ))}
            </nav>

            {/* リンク */}
            <div className="mt-8 bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold text-white mb-3">🔗 参考リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub公式サイト →
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub公式ドキュメント →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* コンテンツエリア */}
          <div className="lg:col-span-3">
            {currentSection && (
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{currentSection.icon}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {currentSection.title}
                  </h2>
                </div>
                {currentSection.content}
              </div>
            )}

            {/* ナビゲーションボタン */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(
                    (s) => s.id === activeSection
                  );
                  if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                  }
                }}
                disabled={sections.findIndex((s) => s.id === activeSection) === 0}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                前へ
              </button>
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(
                    (s) => s.id === activeSection
                  );
                  if (currentIndex < sections.length - 1) {
                    setActiveSection(sections[currentIndex + 1].id);
                  }
                }}
                disabled={
                  sections.findIndex((s) => s.id === activeSection) ===
                  sections.length - 1
                }
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                次へ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
