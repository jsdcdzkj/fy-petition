import sys
import os
from waitress import serve

import json
from PyQt5.QtWidgets import (QApplication, QWidget, QLabel, QPushButton,
                             QVBoxLayout, QLineEdit, QTextEdit, QMessageBox,
                             QSystemTrayIcon, QMenu, QAction)
from PyQt5.QAxContainer import QAxWidget
from PyQt5.QtGui import QIcon, QFont
from flask import Flask, jsonify
import threading
import winreg as reg

def get_icon_path():
    """ 获取图标路径，在不同模式下都能正确识别 """
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, 'jsdc.ico')  # PyInstaller 打包后的路径
    else:
        return os.path.join(os.path.dirname(os.path.abspath(__file__)), 'jsdc.ico')  # 开发环境或 onedir 运行时的路径

icon_path = get_icon_path()

class IDCardReaderApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
        self.data = {}
        self.app = Flask(__name__)
        self.setup_flask_routes()
        self.flask_thread = None
        self.start_flask_server()

    def initUI(self):
        # 初始化主窗口
        self.setWindowTitle(" 身份证阅读器")
        self.setGeometry(200, 200, 400, 500)

        # 创建系统托盘
        self.tray_icon = QSystemTrayIcon(QIcon(icon_path), self)
        self.create_tray_menu()
        self.tray_icon.setVisible(True)

        # 初始化OCX控件
        self.ocx = QAxWidget("{40131980-BA24-4655-9087-CA314FB0C7B5}")

        # 创建按钮和输入框
        self.check_ocx_btn = QPushButton("检测OCX是否安装", self)
        self.check_ocx_btn.clicked.connect(self.check_ocx)

        self.read_card_btn = QPushButton("读取身份证", self)
        self.read_card_btn.clicked.connect(self.read_card)

        self.clear_btn = QPushButton("清除", self)
        self.clear_btn.clicked.connect(self.clear_form)

        self.name_label = QLabel("姓名:")
        self.name_input = QLineEdit()

        self.card_no_label = QLabel("身份证号:")
        self.card_no_input = QLineEdit()

        self.address_label = QLabel("地址:")
        self.address_input = QTextEdit()

        # 创建布局
        layout = QVBoxLayout()
        layout.addWidget(self.check_ocx_btn)
        layout.addWidget(self.read_card_btn)
        layout.addWidget(self.clear_btn)
        layout.addWidget(self.name_label)
        layout.addWidget(self.name_input)
        layout.addWidget(self.card_no_label)
        layout.addWidget(self.card_no_input)
        layout.addWidget(self.address_label)
        layout.addWidget(self.address_input)

        self.setLayout(layout)

        # 设置窗口为隐藏状态
        self.hide()

    def create_tray_menu(self):
        menu = QMenu()
        show_action = QAction("显示", self)
        show_action.triggered.connect(self.show_window)

        exit_action = QAction("退出", self)
        exit_action.triggered.connect(self.close_app)

        menu.addAction(show_action)
        menu.addAction(exit_action)

        self.tray_icon.setContextMenu(menu)

        # 设置托盘双击打开界面
        self.tray_icon.activated.connect(self.tray_icon_activated)
        self.tray_icon.show()

    def tray_icon_activated(self, reason):
        """托盘图标双击事件触发"""
        if reason == QSystemTrayIcon.DoubleClick:
            self.show_window()
    def show_window(self):
        self.showNormal()

    def closeEvent(self, event):
        """关闭窗口时最小化到托盘"""
        self.hide()  # 最小化而不是关闭窗口
        event.ignore()  # 阻止窗口关闭事件
    def close_app(self):
        os._exit(0)

    def check_ocx(self):
        if self.ocx.isNull():
            QMessageBox.critical(self, "错误", "OCX未安装或加载失败")
        else:
            QMessageBox.information(self, "成功", "OCX已安装")

    def read_card(self):
        try:
            ret = self.ocx.dynamicCall("ReadCard(int)", 4)
            if ret == '0':
                self.fill_form()
            else:
                QMessageBox.critical(self, "错误", f"读卡错误, 错误码: {ret}")
        except Exception as e:
            QMessageBox.critical(self, "异常", str(e))

    def read_card_api(self):
        self.data = {}
        try:
            ret = self.ocx.dynamicCall("ReadCard(int)", 4)
            if ret == '0':
                self.fill_form_api()
            else:
                self.data['code'] = "-1"
                self.data['msg'] = f"读卡错误, 错误码: {ret}"
        except Exception as e:
            self.data['code'] = "-1"
            self.data['msg'] = f"读卡异常："+str(e)

    def fill_form(self):
        self.name_input.setText(self.ocx.dynamicCall("Name"))
        self.card_no_input.setText(self.ocx.dynamicCall("CardNo"))
        self.address_input.setText(self.ocx.dynamicCall("Address"))

    def fill_form_api(self):
        try:
            self.data['code'] = "0"
            self.data['name'] = self.ocx.dynamicCall("Name")
            self.data['sex'] = self.ocx.dynamicCall("Sex")
            self.data['nation'] = self.ocx.dynamicCall("Nation")
            self.data['born'] = self.ocx.dynamicCall("Born")
            self.data['card_no'] = self.ocx.dynamicCall("CardNo")
            self.data['address'] = self.ocx.dynamicCall("Address")
            self.data['police'] = self.ocx.dynamicCall("IssuedAt")
            self.data['activityLFrom'] = self.ocx.dynamicCall("EffectedDate")
            self.data['activityLTo'] = self.ocx.dynamicCall("ExpiredDate")
        except Exception as e:
            self.data['code'] = "-1"
            self.data['msg'] = f"字段解析异常：{str(e)}"

    def clear_form(self):
        self.name_input.clear()
        self.card_no_input.clear()
        self.address_input.clear()

    def setup_flask_routes(self):
        @self.app.route('/readCardNo', methods=['GET'])
        def get_id_data():
            self.read_card_api()
            return jsonify(self.data)

    def start_flask_server(self):
        def run_flask():
            serve(self.app, host="0.0.0.0", port=5000)

        self.flask_thread = threading.Thread(target=run_flask)
        self.flask_thread.daemon = True
        self.flask_thread.start()

    def set_auto_start(self):
        """添加到Windows启动项"""
        # 如果是打包后的exe程序
        if getattr(sys, 'frozen', False):
            # 获取exe文件的完整路径
            exe_path = sys.executable
        else:
            # 如果是直接运行Python脚本
            exe_path = os.path.abspath(sys.argv[0])
        app_name = "readCardClient"  # 应用程序的名称
        try:
            # 注册到 Windows 启动项
            key = reg.HKEY_CURRENT_USER
            sub_key = r"Software\Microsoft\Windows\CurrentVersion\Run"
            with reg.OpenKey(key, sub_key, 0, reg.KEY_WRITE) as reg_key:
                reg.SetValueEx(reg_key, app_name, 0, reg.REG_SZ, exe_path)
                print(f"{app_name} 已添加到开机启动项。")
        except Exception as e:
            print(f"设置自启失败: {e}")


def main():
    app = QApplication(sys.argv)
    window = IDCardReaderApp()
    window.set_auto_start()
    window.hide()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()