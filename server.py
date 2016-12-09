#coding=utf-8

import subprocess

command = 'python -m SimpleHTTPServer'

if __name__ == '__main__':
  subprocess.call(command, shell=True)
