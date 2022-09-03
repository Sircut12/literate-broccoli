import undetected_chromedriver as uc
from selenium.webdriver import Chrome
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random
import json
import os
import requests
from selenium.webdriver.common.by import By
os.system("rm -rf rawr")
os.system("cp -r rawrz rawr")
options = uc.ChromeOptions()
a = True
low_word = "abcdefghijklkmnopqrstuvwxyz"
upper_word = "ABDCEFGHIJKLMNOPQRSTUVWXYZ"
number = "1234567890"
symbols = "!@#$%&*"
username_for = low_word
password_for = low_word + upper_word + number + symbols
long_password = 16
long_username = 12
options.add_argument('--no-first-run --no-service-autorun --password-store=basic') #wlacz to jak juz nie bedzie dev test
options.add_argument("--window-size=1920,1080")
options.add_argument("--remote-debugging-port=38223")
driver = uc.Chrome(options=options, version_main=103)  # version_main allows to specify your chrome version instead of following chrome global version
driver.set_window_size(1920, 1080)
driver.get("http://lyksoomu.com/CSMc")
time.sleep(15)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
print(driver.current_url)
driver.get("http://lyksoomu.com/CSMc")
time.sleep(15)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
driver.get("http://lyksoomu.com/CSMc")
time.sleep(15)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
driver.get("http://lyksoomu.com/CSMc")
time.sleep(15)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
driver.get("http://lyksoomu.com/CSMc")
time.sleep(15)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
try:
    driver.find_element(By.XPATH, "/html/body/div[5]/table/tbody/tr[1]/td/div/div[1]/span[2]/a/img").click()
except:
    pass
time.sleep(1)
time.sleep(10)
driver.close()
