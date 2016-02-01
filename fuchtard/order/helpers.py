def shifthash(n):
    n = int(n)
    return ((0x000FFF & n) << 12) + ((0xFFF000 & n) >> 12)