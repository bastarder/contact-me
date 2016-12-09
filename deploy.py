#coding=utf-8

import subprocess

command = 'rsync -azP . root@115.159.181.217:/usr/share/nginx/contact'

if __name__ == '__main__':
  subprocess.call(command, shell=True)
