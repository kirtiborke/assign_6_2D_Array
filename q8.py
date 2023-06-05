class Solution:
    def multiply(self, mat1: List[List[int]], mat2: List[List[int]]) -> List[List[int]]:
        r1, c1, c2 = len(mat1), len(mat1[0]), len(mat2[0])
        res = [[0] * c2 for _ in range(r1)]
        mp = defaultdict(list)
        for i in range(r1):
            for j in range(c1):
                if mat1[i][j] != 0:
                    mp[i].append(j)
        for i in range(r1):
            for j in range(c2):
                for k in mp[i]:
                    res[i][j] += mat1[i][k] * mat2[k][j]
        return res

############

class Solution(object):
  def multiply(self, A, B):
    ret = [[0 for j in range(len(B[0]))] for i in range(len(A))]

    for i, row in enumerate(A):
      for k, a in enumerate(row):
        if a:
          for j, b in enumerate(B[k]):
            if b:
              ret[i][j] += a * b
    return ret