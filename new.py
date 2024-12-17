import sys
import re
import pyperclip as pc

def pr(s):
    print(s)
    pc.copy(s)

sys.setrecursionlimit(10**6)
DIRS = [(-1, 0), (0, 1), (1, 0), (0, -1)]  # up, right, down, left

def ints(s):
    return [int(x) for x in re.findall('-?\d+', s)]

# Read input from 'input.txt'
infile = 'input.txt'  # Set the input file to 'input.txt'
ans = 0
D = open(infile).read().strip()

# Check if there is an empty line between the registers and the program, and split accordingly
if '\n\n' in D:
    regs, program = D.split('\n\n')
else:
    print("Error: Input file format is incorrect.")
    sys.exit(1)

# Parse the registers and program
A, B, C = ints(regs)
program = program.split(':')[1].strip()  # Extract the program part after "Program:"
program = [int(x) for x in program.split(',')]  # Split by commas and convert to integers

# Function to run the program with parameters
def run(Ast, part2):
    def getCombo(x):
        if x in [0, 1, 2, 3]:
            return x
        if x == 4:
            return A
        if x == 5:
            return B
        if x == 6:
            return C
        return -1

    A = Ast
    B = 0
    C = 0
    ip = 0
    out = []
    while True:
        if ip >= len(program):
            return out
        cmd = program[ip]
        op = program[ip + 1]
        combo = getCombo(op)

        if cmd == 0:
            A = A // 2**combo
            ip += 2
        elif cmd == 1:
            B = B ^ op
            ip += 2
        elif cmd == 2:
            B = combo % 8
            ip += 2
        elif cmd == 3:
            if A != 0:
                ip = op
            else:
                ip += 2
        elif cmd == 4:
            B = B ^ C
            ip += 2
        elif cmd == 5:
            out.append(int(combo % 8))
            if part2 and out[len(out) - 1] != program[len(out) - 1]:
                return out
            ip += 2
        elif cmd == 6:
            B = A // 2**combo
            ip += 2
        elif cmd == 7:
            C = A // 2**combo
            ip += 2

# Part 1
part1 = run(A, False)
print(','.join([str(x) for x in part1]))

# Part 2
Ast = 0
best = 0
while True:
    Ast += 1
    A = Ast * 8**9 + 0o676236017
    out = run(A, True)
    if out == program:
        print(A)
        break
    elif len(out) > best:
        best = len(out)
