#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input())
    for i in range(0, 10):
        print(str(n)+" x "+str(i+1)+" = "+str(n * (i+1)))
