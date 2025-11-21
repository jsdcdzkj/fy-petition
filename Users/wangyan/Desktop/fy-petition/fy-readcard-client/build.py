import os
import subprocess


def build_executable():
    """使用 PyInstaller 打包 Python 应用程序"""
    try:
        # 定义打包参数
        params = [
            "pyinstaller",
            # "--onefile",  # 生成单个可执行文件
            "--noconsole",  # 隐藏控制台窗口（适用于 GUI 应用）
            # "--hidden-import=PyQt5",  # 确保包含 plyer 库
            # "--hidden-import=pywin32",  # 确保包含 plyer 库
            # "--add-binary=IDD_COMM_GUOG.dll;.",  # 包含 DLL 文件
            # "--add-binary=MyDllTest.dll;.",  # 包含 DLL 文件
            # "--add-binary=C:/Users/51223/AppData/Local/Programs/Python/Python39/python39.dll;.",  # 包含 DLL 文件
            "--icon=jsdc.ico",  # 添加应用程序图标（可选）
            "--name=my_app",  # 包 打后的可执行文件名称
            "--add-data=jsdc.ico;.",  # 包含 resources 文件夹及其内容
            "main6.py"  # 你的主程序文件
        ]

        # 执行打包命令
        subprocess.run(params, check=True)

        print("打包完成！")
        print(f"生成的可执行文件位于: {os.path.abspath('dist')}")

    except subprocess.CalledProcessError as e:
        print(f"打包失败: {e}")
    except Exception as e:
        print(f"发生错误: {e}")


if __name__ == "__main__":
    build_executable()