import math
import time


global current
global voltage

t = 0
inc = 0.05

while True:
	if t > 2*math.pi:
		t = 0
	current = math.sin(t)
	voltage = math.cos(t)

	print(current, voltage)

	t += inc
	time.sleep(0.1)
