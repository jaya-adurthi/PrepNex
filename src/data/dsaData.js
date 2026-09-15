// Full 16-Topic DSA Dataset with zero placeholders

export const dsaTopics = [
  {
    "id": "topic-arrays",
    "name": "Arrays",
    "description": "Master array manipulation, multi-pointer strategies, sliding window, and prefix sums.",
    "icon": "Grid",
    "total_patterns": 4,
    "total_problems": 19,
    "patterns": [
      {
        "id": "pattern-two-pointers",
        "name": "Two Pointers",
        "subtitle": "Sorted & Traversal",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 5,
        "what": "Traverses array simultaneously from opposite ends.",
        "when_to_use": "Target sum in sorted array, in-place swapping.",
        "how_to_identify": "Sorted array, target sum pair.",
        "intuition": "Pointer movement narrows search space in O(N).",
        "step_by_step": [
          "Initialize left=0, right=n-1",
          "Check sum vs target",
          "Adjust pointers"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def two_sum(nums, target):\n    l, r = 0, len(nums) - 1\n    while l < r:\n        s = nums[l] + nums[r]\n        if s == target: return [l + 1, r + 1]\n        elif s < target: l += 1\n        else: r -= 1\n    return []",
          "java": "public int[] twoSum(int[] nums, int target) {\n    int l = 0, r = nums.length - 1;\n    while (l < r) {\n        int s = nums[l] + nums[r];\n        if (s == target) return new int[]{l + 1, r + 1};\n        else if (s < target) l++; else r--;\n    }\n    return new int me me;\n}",
          "cpp": "vector<int> twoSum(vector<int>& nums, int target) {\n    int l = 0, r = nums.size() - 1;\n    while (l < r) {\n        int s = nums[l] + nums[r];\n        if (s == target) return {l + 1, r + 1};\n        else if (s < target) l++; else r--;\n    }\n    return {};\n}"
        },
        "questions": [
          {
            "id": "q-two-sum-ii",
            "title": "Two Sum II - Input Array Is Sorted",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            "statement": "Find two numbers adding up to target in sorted array.",
            "examples": [
              {
                "input": "numbers = [2,7,11,15], target = 9",
                "output": "[1,2]"
              }
            ],
            "constraints": [
              "2 <= numbers.length <= 3*10^4"
            ],
            "approach": "Two pointers at ends.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def twoSum(self, numbers: list[int], target: int) -> list[int]:\n        l, r = 0, len(numbers) - 1\n        while l < r:\n            s = numbers[l] + numbers[r]\n            if s == target: return [l + 1, r + 1]\n            elif s < target: l += 1\n            else: r -= 1\n        return []",
              "java": "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int l = 0, r = numbers.length - 1;\n        while (l < r) {\n            int s = numbers[l] + numbers[r];\n            if (s == target) return new int[]{l + 1, r + 1};\n            if (s < target) l++; else r--;\n        }\n        return new int me me;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        int l = 0, r = numbers.size() - 1;\n        while (l < r) {\n            int s = numbers[l] + numbers[r];\n            if (s == target) return {l + 1, r + 1};\n            if (s < target) l++; else r--;\n        }\n        return {};\n    }\n};"
            }
          },
          {
            "id": "q-container-water",
            "title": "Container With Most Water",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/container-with-most-water/",
            "statement": "Find two lines forming container with most water.",
            "examples": [
              {
                "input": "height = [1,8,6,2,5,4,8,3,7]",
                "output": "49"
              }
            ],
            "constraints": [
              "2 <= n <= 10^5"
            ],
            "approach": "Move shorter line pointer inward.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        l, r, max_w = 0, len(height) - 1, 0\n        while l < r:\n            max_w = max(max_w, min(height[l], height[r]) * (r - l))\n            if height[l] < height[r]: l += 1\n            else: r -= 1\n        return max_w",
              "java": "class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, maxW = 0;\n        while (l < r) {\n            maxW = Math.max(maxW, Math.min(height[l], height[r]) * (r - l));\n            if (height[l] < height[r]) l++; else r--;\n        }\n        return maxW;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int l = 0, r = height.size() - 1, maxW = 0;\n        while (l < r) {\n            maxW = max(maxW, min(height[l], height[r]) * (r - l));\n            if (height[l] < height[r]) l++; else r--;\n        }\n        return maxW;\n    }\n};"
            }
          },
          {
            "id": "q-3sum",
            "title": "3Sum",
            "difficulty": "Medium",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/3sum/",
            "statement": "Return all triplets summing to zero.",
            "examples": [
              {
                "input": "nums = [-1,0,1,2,-1,-4]",
                "output": "[[-1,-1,2],[-1,0,1]]"
              }
            ],
            "constraints": [
              "3 <= nums.length <= 3000"
            ],
            "approach": "Sort + two pointers.",
            "complexity": "Time: O(N^2), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        nums.sort(); res = []\n        for i in range(len(nums)-2):\n            if i > 0 and nums[i] == nums[i-1]: continue\n            l, r = i+1, len(nums)-1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if s == 0:\n                    res.append([nums[i], nums[l], nums[r]])\n                    while l < r and nums[l] == nums[l+1]: l += 1\n                    while l < r and nums[r] == nums[r-1]: r -= 1\n                    l += 1; r -= 1\n                elif s < 0: l += 1\n                else: r -= 1\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums); List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int s = nums[i] + nums[l] + nums[r];\n                if (s == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l+1]) l++;\n                    while (l < r && nums[r] == nums[r-1]) r--;\n                    l++; r--;\n                } else if (s < 0) l++; else r--;\n            }\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        sort(nums.begin(), nums.end()); vector<vector<int>> res;\n        for (int i = 0; i < (int)nums.size() - 2; i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            int l = i + 1, r = nums.size() - 1;\n            while (l < r) {\n                int s = nums[i] + nums[l] + nums[r];\n                if (s == 0) {\n                    res.push_back({nums[i], nums[l], nums[r]});\n                    while (l < r && nums[l] == nums[l+1]) l++;\n                    while (l < r && nums[r] == nums[r-1]) r--;\n                    l++; r--;\n                } else if (s < 0) l++; else r--;\n            }\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-remove-duplicates-sorted",
            "title": "Remove Duplicates from Sorted Array",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "statement": "Remove duplicates in-place.",
            "examples": [
              {
                "input": "nums = [1,1,2]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 3*10^4"
            ],
            "approach": "Write index pointer.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def removeDuplicates(self, nums: list[int]) -> int:\n        if not nums: return 0\n        w = 1\n        for r in range(1, len(nums)):\n            if nums[r] != nums[r-1]: nums[w] = nums[r]; w += 1\n        return w",
              "java": "class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n        int w = 1;\n        for (int r = 1; r < nums.length; r++) if (nums[r] != nums[r-1]) nums[w++] = nums[r];\n        return w;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        int w = 1;\n        for (int r = 1; r < nums.size(); r++) if (nums[r] != nums[r-1]) nums[w++] = nums[r];\n        return w;\n    }\n};"
            }
          },
          {
            "id": "q-move-zeroes",
            "title": "Move Zeroes",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/move-zeroes/",
            "statement": "Move all zeros to end in-place.",
            "examples": [
              {
                "input": "nums = [0,1,0,3,12]",
                "output": "[1,3,12,0,0]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Swap non-zero with write pointer.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def moveZeroes(self, nums: list[int]) -> None:\n        last = 0\n        for i in range(len(nums)):\n            if nums[i] != 0: nums[last], nums[i] = nums[i], nums[last]; last += 1",
              "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int last = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) { int tmp = nums[last]; nums[last] = nums[i]; nums[i] = tmp; last++; }\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int last = 0;\n        for (int i = 0; i < nums.size(); i++) if (nums[i] != 0) swap(nums[last++], nums[i]);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-sliding-window",
        "name": "Sliding Window",
        "subtitle": "Contiguous Subarrays",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 5,
        "what": "Running contiguous window boundary movement.",
        "when_to_use": "Evaluating contiguous subarrays.",
        "how_to_identify": "Subarray max/min window.",
        "intuition": "O(1) window update instead of O(N*K).",
        "step_by_step": [
          "Expand right",
          "Update window sum",
          "Shrink left when needed"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def max_sub_array_len(nums, k):\n    l = curr = max_l = 0\n    for r in range(len(nums)):\n        curr += nums[r]\n        while curr > k: curr -= nums[l]; l += 1\n        max_l = max(max_l, r - l + 1)\n    return max_l",
          "java": "public int maxSubArrayLen(int[] nums, int k) {\n    int l = 0, curr = 0, maxL = 0;\n    for (int r = 0; r < nums.length; r++) {\n        curr += nums[r]; while (curr > k) curr -= nums[l++];\n        maxL = Math.max(maxL, r - l + 1);\n    }\n    return maxL;\n}",
          "cpp": "int maxSubArrayLen(vector<int>& nums, int k) {\n    int l = 0, curr = 0, maxL = 0;\n    for (int r = 0; r < nums.size(); r++) {\n        curr += nums[r]; while (curr > k) curr -= nums[l++];\n        maxL = max(maxL, r - l + 1);\n    }\n    return maxL;\n}"
        },
        "questions": [
          {
            "id": "q-max-avg-subarray",
            "title": "Maximum Average Subarray I",
            "difficulty": "Easy",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/maximum-average-subarray-i/",
            "statement": "Find max average subarray of length k.",
            "examples": [
              {
                "input": "nums = [1,12,-5,-6,50,3], k = 4",
                "output": "12.75000"
              }
            ],
            "constraints": [
              "1 <= k <= n <= 10^5"
            ],
            "approach": "Fixed window of size k.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def findMaxAverage(self, nums: list[int], k: int) -> float:\n        curr = max_s = sum(nums[:k])\n        for i in range(k, len(nums)):\n            curr += nums[i] - nums[i-k]; max_s = max(max_s, curr)\n        return max_s / k",
              "java": "class Solution {\n    public double findMaxAverage(int[] nums, int k) {\n        long sum = 0; for (int i = 0; i < k; i++) sum += nums[i];\n        long maxS = sum;\n        for (int i = k; i < nums.length; i++) { sum += nums[i] - nums[i-k]; maxS = Math.max(maxS, sum); }\n        return (double) maxS / k;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    double findMaxAverage(vector<int>& nums, int k) {\n        double sum = 0; for (int i = 0; i < k; i++) sum += nums[i];\n        double maxS = sum;\n        for (int i = k; i < nums.size(); i++) { sum += nums[i] - nums[i-k]; maxS = max(maxS, sum); }\n        return maxS / k;\n    }\n};"
            }
          },
          {
            "id": "q-min-size-subarray-sum",
            "title": "Minimum Size Subarray Sum",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
            "statement": "Minimal length subarray with sum >= target.",
            "examples": [
              {
                "input": "target = 7, nums = [2,3,1,2,4,3]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= target <= 10^9"
            ],
            "approach": "Variable window shrink when sum >= target.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def minSubArrayLen(self, target: int, nums: list[int]) -> int:\n        l = curr = 0; ans = float('inf')\n        for r in range(len(nums)):\n            curr += nums[r]\n            while curr >= target: ans = min(ans, r - l + 1); curr -= nums[l]; l += 1\n        return ans if ans != float('inf') else 0",
              "java": "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        int l = 0, curr = 0, ans = Integer.MAX_VALUE;\n        for (int r = 0; r < nums.length; r++) {\n            curr += nums[r]; while (curr >= target) { ans = Math.min(ans, r - l + 1); curr -= nums[l++]; }\n        }\n        return ans == Integer.MAX_VALUE ? 0 : ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int l = 0, curr = 0, ans = INT_MAX;\n        for (int r = 0; r < nums.size(); r++) {\n            curr += nums[r]; while (curr >= target) { ans = min(ans, r - l + 1); curr -= nums[l++]; }\n        }\n        return ans == INT_MAX ? 0 : ans;\n    }\n};"
            }
          },
          {
            "id": "q-max-consecutive-ones-iii",
            "title": "Max Consecutive Ones III",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
            "statement": "Max consecutive 1s flipping at most k 0s.",
            "examples": [
              {
                "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
                "output": "6"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Window tracking zero count.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def longestOnes(self, nums: list[int], k: int) -> int:\n        l = zeros = 0\n        for r in range(len(nums)):\n            if nums[r] == 0: zeros += 1\n            if zeros > k:\n                if nums[l] == 0: zeros -= 1\n                l += 1\n        return len(nums) - l",
              "java": "class Solution {\n    public int longestOnes(int[] nums, int k) {\n        int l = 0, zeros = 0;\n        for (int r = 0; r < nums.length; r++) {\n            if (nums[r] == 0) zeros++;\n            if (zeros > k) { if (nums[l] == 0) zeros--; l++; }\n        }\n        return nums.length - l;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        int l = 0, zeros = 0;\n        for (int r = 0; r < nums.size(); r++) {\n            if (nums[r] == 0) zeros++;\n            if (zeros > k) { if (nums[l] == 0) zeros--; l++; }\n        }\n        return nums.size() - l;\n    }\n};"
            }
          },
          {
            "id": "q-subarray-product-less-than-k",
            "title": "Subarray Product Less Than K",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/subarray-product-less-than-k/",
            "statement": "Subarrays with product < k.",
            "examples": [
              {
                "input": "nums = [10,5,2,6], k = 100",
                "output": "8"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 3*10^4"
            ],
            "approach": "Product sliding window. Add (r - l + 1).",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def numSubarrayProductLessThanK(self, nums: list[int], k: int) -> int:\n        if k <= 1: return 0\n        prod = 1; ans = l = 0\n        for r in range(len(nums)):\n            prod *= nums[r]\n            while prod >= k: prod //= nums[l]; l += 1\n            ans += r - l + 1\n        return ans",
              "java": "class Solution {\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\n        if (k <= 1) return 0;\n        int prod = 1, ans = 0, l = 0;\n        for (int r = 0; r < nums.length; r++) {\n            prod *= nums[r]; while (prod >= k) prod /= nums[l++];\n            ans += r - l + 1;\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        if (k <= 1) return 0;\n        int prod = 1, ans = 0, l = 0;\n        for (int r = 0; r < nums.size(); r++) {\n            prod *= nums[r]; while (prod >= k) prod /= nums[l++];\n            ans += r - l + 1;\n        }\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-fruit-into-baskets",
            "title": "Fruit Into Baskets",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/fruit-into-baskets/",
            "statement": "Max fruits with two baskets.",
            "examples": [
              {
                "input": "fruits = [1,2,1]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= fruits.length <= 10^5"
            ],
            "approach": "Window with freq map size <= 2.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def totalFruit(self, fruits: list[int]) -> int:\n        counts = {}; l = max_f = 0\n        for r in range(len(fruits)):\n            counts[fruits[r]] = counts.get(fruits[r], 0) + 1\n            while len(counts) > 2:\n                counts[fruits[l]] -= 1\n                if counts[fruits[l]] == 0: del counts[fruits[l]]\n                l += 1\n            max_f = max(max_f, r - l + 1)\n        return max_f",
              "java": "class Solution {\n    public int totalFruit(int[] fruits) {\n        Map<Integer, Integer> map = new HashMap<>(); int l = 0, maxF = 0;\n        for (int r = 0; r < fruits.length; r++) {\n            map.put(fruits[r], map.getOrDefault(fruits[r], 0) + 1);\n            while (map.size() > 2) {\n                map.put(fruits[l], map.get(fruits[l]) - 1);\n                if (map.get(fruits[l]) == 0) map.remove(fruits[l]); l++;\n            }\n            maxF = Math.max(maxF, r - l + 1);\n        }\n        return maxF;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        unordered_map<int, int> mp; int l = 0, maxF = 0;\n        for (int r = 0; r < fruits.size(); r++) {\n            mp[fruits[r]]++;\n            while (mp.size() > 2) {\n                mp[fruits[l]]--; if (mp[fruits[l]] == 0) mp.erase(fruits[l]); l++;\n            }\n            maxF = max(maxF, r - l + 1);\n        }\n        return maxF;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-prefix-sum",
        "name": "Prefix Sum",
        "subtitle": "Range Queries",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 5,
        "what": "Cumulative sum array P[i] = sum(0..i-1).",
        "when_to_use": "O(1) range sum queries.",
        "how_to_identify": "Range sum queries.",
        "intuition": "Precompute cumulative prefix sums.",
        "step_by_step": [
          "pref[i+1] = pref[i] + nums[i]",
          "query = pref[R+1] - pref[L]"
        ],
        "time_complexity": "O(N) build, O(1) query",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "class NumArray:\n    def __init__(self, nums):\n        self.pref = [0] * (len(nums) + 1)\n        for i in range(len(nums)): self.pref[i+1] = self.pref[i] + nums[i]\n    def sumRange(self, left, right):\n        return self.pref[right+1] - self.pref[left]",
          "java": "class NumArray {\n    private int[] pref;\n    public NumArray(int[] nums) {\n        pref = new int[nums.length + 1];\n        for (int i = 0; i < nums.length; i++) pref[i + 1] = pref[i] + nums[i];\n    }\n    public int sumRange(int left, int right) { return pref[right + 1] - pref[left]; }\n}",
          "cpp": "class NumArray {\n    vector<int> pref;\npublic:\n    NumArray(vector<int>& nums) {\n        pref.assign(nums.size() + 1, 0);\n        for (int i = 0; i < nums.size(); i++) pref[i + 1] = pref[i] + nums[i];\n    }\n    int sumRange(int left, int right) { return pref[right + 1] - pref[left]; }\n};"
        },
        "questions": [
          {
            "id": "q-range-sum-query",
            "title": "Range Sum Query - Immutable",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/range-sum-query-immutable/",
            "statement": "Calculate sum between indices left and right.",
            "examples": [
              {
                "input": "nums = [-2, 0, 3, -5, 2, -1], sumRange(0, 2)",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Prefix sum array.",
            "complexity": "Time: O(1), Space: O(N)",
            "code": {
              "python": "class NumArray:\n    def __init__(self, nums: list[int]):\n        self.pref = [0] * (len(nums) + 1)\n        for i in range(len(nums)): self.pref[i+1] = self.pref[i] + nums[i]\n    def sumRange(self, left: int, right: int) -> int:\n        return self.pref[right+1] - self.pref[left]",
              "java": "class NumArray {\n    private int[] pref;\n    public NumArray(int[] nums) {\n        pref = new int[nums.length + 1];\n        for (int i = 0; i < nums.length; i++) pref[i + 1] = pref[i] + nums[i];\n    }\n    public int sumRange(int left, int right) { return pref[right + 1] - pref[left]; }\n}",
              "cpp": "class NumArray {\n    vector<int> pref;\npublic:\n    NumArray(vector<int>& nums) {\n        pref.assign(nums.size() + 1, 0);\n        for (int i = 0; i < nums.size(); i++) pref[i + 1] = pref[i] + nums[i];\n    }\n    int sumRange(int left, int right) { return pref[right + 1] - pref[left]; }\n};"
            }
          },
          {
            "id": "q-find-pivot-index",
            "title": "Find Pivot Index",
            "difficulty": "Easy",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/find-pivot-index/",
            "statement": "Find index where left sum equals right sum.",
            "examples": [
              {
                "input": "nums = [1,7,3,6,5,6]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "left_sum == total_sum - left_sum - nums[i].",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def pivotIndex(self, nums: list[int]) -> int:\n        total = sum(nums); left = 0\n        for i, x in enumerate(nums):\n            if left == total - left - x: return i\n            left += x\n        return -1",
              "java": "class Solution {\n    public int pivotIndex(int[] nums) {\n        int total = 0; for (int x : nums) total += x;\n        int left = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (left == total - left - nums[i]) return i;\n            left += nums[i];\n        }\n        return -1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int pivotIndex(vector<int>& nums) {\n        int total = 0; for (int x : nums) total += x;\n        int left = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            if (left == total - left - nums[i]) return i;\n            left += nums[i];\n        }\n        return -1;\n    }\n};"
            }
          },
          {
            "id": "q-subarray-sum-equals-k",
            "title": "Subarray Sum Equals K",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/subarray-sum-equals-k/",
            "statement": "Total subarrays whose sum equals to k.",
            "examples": [
              {
                "input": "nums = [1,1,1], k = 2",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 2*10^4"
            ],
            "approach": "Prefix sum HashMap.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def subarraySum(self, nums: list[int], k: int) -> int:\n        mp = {0: 1}; curr = ans = 0\n        for x in nums: curr += x; ans += mp.get(curr - k, 0); mp[curr] = mp.get(curr, 0) + 1\n        return ans",
              "java": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>(); map.put(0, 1);\n        int curr = 0, ans = 0;\n        for (int x : nums) { curr += x; ans += map.getOrDefault(curr - k, 0); map.put(curr, map.getOrDefault(curr, 0) + 1); }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        unordered_map<int, int> mp; mp[0] = 1;\n        int curr = 0, ans = 0;\n        for (int x : nums) { curr += x; ans += mp[curr - k]; mp[curr]++; }\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-product-except-self",
            "title": "Product of Array Except Self",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/product-of-array-except-self/",
            "statement": "Output[i] is product of all elements except nums[i].",
            "examples": [
              {
                "input": "nums = [1,2,3,4]",
                "output": "[24,12,8,6]"
              }
            ],
            "constraints": [
              "2 <= nums.length <= 10^5"
            ],
            "approach": "Prefix and postfix products pass.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        n = len(nums); res = [1] * n; pref = 1\n        for i in range(n): res[i] = pref; pref *= nums[i]\n        post = 1\n        for i in range(n-1, -1, -1): res[i] *= post; post *= nums[i]\n        return res",
              "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length; int[] res = new int[n]; res[0] = 1;\n        for (int i = 1; i < n; i++) res[i] = res[i-1] * nums[i-1];\n        int right = 1;\n        for (int i = n - 1; i >= 0; i--) { res[i] *= right; right *= nums[i]; }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        int n = nums.size(); vector<int> res(n, 1);\n        for (int i = 1; i < n; i++) res[i] = res[i-1] * nums[i-1];\n        int right = 1;\n        for (int i = n - 1; i >= 0; i--) { res[i] *= right; right *= nums[i]; }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-continuous-subarray-sum",
            "title": "Continuous Subarray Sum",
            "difficulty": "Medium",
            "estimated_minutes": 22,
            "leetcode_url": "https://leetcode.com/problems/continuous-subarray-sum/",
            "statement": "Subarray length >= 2 summing to multiple of k.",
            "examples": [
              {
                "input": "nums = [23,2,4,6,7], k = 6",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Prefix sum % k HashMap storing earliest index.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def checkSubarraySum(self, nums: list[int], k: int) -> bool:\n        mp = {0: -1}; curr = 0\n        for i, x in enumerate(nums):\n            curr += x; rem = curr % k\n            if rem in mp:\n                if i - mp[rem] >= 2: return True\n            else: mp[rem] = i\n        return False",
              "java": "class Solution {\n    public boolean checkSubarraySum(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>(); map.put(0, -1);\n        int curr = 0;\n        for (int i = 0; i < nums.length; i++) {\n            curr += nums[i]; int rem = curr % k;\n            if (map.containsKey(rem)) {\n                if (i - map.get(rem) >= 2) return true;\n            } else map.put(rem, i);\n        }\n        return false;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool checkSubarraySum(vector<int>& nums, int k) {\n        unordered_map<int, int> mp; mp[0] = -1;\n        int curr = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            curr += nums[i]; int rem = curr % k;\n            if (mp.count(rem)) {\n                if (i - mp[rem] >= 2) return true;\n            } else mp[rem] = i;\n        }\n        return false;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-kadanes-algorithm",
        "name": "Kadane's Algorithm",
        "subtitle": "Maximum Subarray Sum",
        "difficulty": "Medium",
        "total_problems": 4,
        "what": "DP technique tracking max subarray ending at current position.",
        "when_to_use": "Contiguous max subarray sum.",
        "how_to_identify": "Max subarray sum.",
        "intuition": "Reset running sum to 0 if it drops below zero.",
        "step_by_step": [
          "curr_max = max(x, curr_max + x)",
          "max_so_far = max(max_so_far, curr_max)"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def max_sub_array(nums):\n    max_s = curr = nums[0]\n    for x in nums[1:]:\n        curr = max(x, curr + x); max_s = max(max_s, curr)\n    return max_s",
          "java": "public int maxSubArray(int[] nums) {\n    int maxS = nums[0], curr = nums[0];\n    for (int i = 1; i < nums.length; i++) { curr = Math.max(nums[i], curr + nums[i]); maxS = Math.max(maxS, curr); }\n    return maxS;\n}",
          "cpp": "int maxSubArray(vector<int>& nums) {\n    int maxS = nums[0], curr = nums[0];\n    for (int i = 1; i < nums.size(); i++) { curr = max(nums[i], curr + nums[i]); maxS = max(maxS, curr); }\n    return maxS;\n}"
        },
        "questions": [
          {
            "id": "q-maximum-subarray",
            "title": "Maximum Subarray",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/maximum-subarray/",
            "statement": "Find subarray with largest sum.",
            "examples": [
              {
                "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                "output": "6"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Kadane's algorithm.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        curr = max_s = nums[0]\n        for x in nums[1:]:\n            curr = max(x, curr + x); max_s = max(max_s, curr)\n        return max_s",
              "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int curr = nums[0], maxS = nums[0];\n        for (int i = 1; i < nums.length; i++) { curr = Math.max(nums[i], curr + nums[i]); maxS = Math.max(maxS, curr); }\n        return maxS;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int curr = nums[0], maxS = nums[0];\n        for (int i = 1; i < nums.size(); i++) { curr = max(nums[i], curr + nums[i]); maxS = max(maxS, curr); }\n        return maxS;\n    }\n};"
            }
          },
          {
            "id": "q-best-time-buy-sell-stock",
            "title": "Best Time to Buy and Sell Stock",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "statement": "Maximize profit buying single stock.",
            "examples": [
              {
                "input": "prices = [7,1,5,3,6,4]",
                "output": "5"
              }
            ],
            "constraints": [
              "1 <= prices.length <= 10^5"
            ],
            "approach": "Track min_price and max_profit.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        min_p, max_p = float('inf'), 0\n        for p in prices:\n            if p < min_p: min_p = p\n            elif p - min_p > max_p: max_p = p - min_p\n        return max_p",
              "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        int minP = Integer.MAX_VALUE, maxP = 0;\n        for (int p : prices) {\n            if (p < minP) minP = p;\n            else if (p - minP > maxP) maxP = p - minP;\n        }\n        return maxP;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minP = INT_MAX, maxP = 0;\n        for (int p : prices) {\n            if (p < minP) minP = p;\n            else if (p - minP > maxP) maxP = p - minP;\n        }\n        return maxP;\n    }\n};"
            }
          },
          {
            "id": "q-max-product-subarray",
            "title": "Maximum Product Subarray",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/maximum-product-subarray/",
            "statement": "Subarray with largest product.",
            "examples": [
              {
                "input": "nums = [2,3,-2,4]",
                "output": "6"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 2*10^4"
            ],
            "approach": "Track max_product and min_product.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxProduct(self, nums: list[int]) -> int:\n        curr_max = curr_min = res = nums[0]\n        for x in nums[1:]:\n            if x < 0: curr_max, curr_min = curr_min, curr_max\n            curr_max = max(x, curr_max * x); curr_min = min(x, curr_min * x)\n            res = max(res, curr_max)\n        return res",
              "java": "class Solution {\n    public int maxProduct(int[] nums) {\n        int currMax = nums[0], currMin = nums[0], res = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            int x = nums[i]; if (x < 0) { int tmp = currMax; currMax = currMin; currMin = tmp; }\n            currMax = Math.max(x, currMax * x); currMin = Math.min(x, currMin * x); res = Math.max(res, currMax);\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int currMax = nums[0], currMin = nums[0], res = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            int x = nums[i]; if (x < 0) swap(currMax, currMin);\n            currMax = max(x, currMax * x); currMin = min(x, currMin * x); res = max(max, currMax);\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-max-sum-circular-subarray",
            "title": "Maximum Sum Circular Subarray",
            "difficulty": "Medium",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
            "statement": "Max sum non-empty circular subarray.",
            "examples": [
              {
                "input": "nums = [1,-2,3,-2]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 3*10^4"
            ],
            "approach": "max(normal_max, total_sum - min_subarray_sum).",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxSubarraySumCircular(self, nums: list[int]) -> int:\n        total = sum(nums); curr_max = max_s = nums[0]; curr_min = min_s = nums[0]\n        for x in nums[1:]:\n            curr_max = max(x, curr_max + x); max_s = max(max_s, curr_max)\n            curr_min = min(x, curr_min + x); min_s = min(min_s, curr_min)\n        return max_s if max_s < 0 else max(max_s, total - min_s)",
              "java": "class Solution {\n    public int maxSubarraySumCircular(int[] nums) {\n        int total = 0, currMax = 0, maxS = nums[0], currMin = 0, minS = nums[0];\n        for (int x : nums) {\n            total += x; currMax = Math.max(x, currMax + x); maxS = Math.max(maxS, currMax);\n            currMin = Math.min(x, currMin + x); minS = Math.min(minS, currMin);\n        }\n        return maxS < 0 ? maxS : Math.max(maxS, total - minS);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxSubarraySumCircular(vector<int>& nums) {\n        int total = 0, currMax = 0, maxS = nums[0], currMin = 0, minS = nums[0];\n        for (int x : nums) {\n            total += x; currMax = max(x, currMax + x); maxS = max(maxS, currMax);\n            currMin = min(x, currMin + x); minS = min(minS, currMin);\n        }\n        return maxS < 0 ? maxS : max(maxS, total - minS);\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-strings",
    "name": "Strings",
    "description": "Master string parsing, palindrome verification, anagram frequency matching, and sliding window string patterns.",
    "icon": "Type",
    "total_patterns": 4,
    "total_problems": 12,
    "patterns": [
      {
        "id": "pattern-string-two-pointers",
        "name": "Two Pointers (Strings)",
        "subtitle": "Palindromes & Swapping",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Traverses string from start (left) and end (right) to check symmetric conditions or reverse in-place.",
        "when_to_use": "Validating palindrome strings, reversing vowels/strings, checking palindrome after single deletion.",
        "how_to_identify": "Palindrome, reverse string, alphanumeric character filtering.",
        "intuition": "Pointers move inward until left >= right, comparing s[left] and s[right] in linear O(N) time.",
        "step_by_step": [
          "Initialize left = 0, right = n - 1",
          "Skip non-alphanumeric chars if required",
          "Compare s[left] and s[right]",
          "Increment left, decrement right"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def isPalindrome(s: str) -> bool:\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return False\n        l += 1; r -= 1\n    return True",
          "java": "public boolean isPalindrome(String s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n        while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n        while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n        if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n        l++; r--;\n    }\n    return true;\n}",
          "cpp": "bool isPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n        while (l < r && !isalnum(s[l])) l++;\n        while (l < r && !isalnum(s[r])) r--;\n        if (tolower(s[l]) != tolower(s[r])) return false;\n        l++; r--;\n    }\n    return true;\n}"
        },
        "questions": [
          {
            "id": "q-valid-palindrome",
            "title": "Valid Palindrome",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/valid-palindrome/",
            "statement": "Return true if string reads same forward and backward after clearing non-alphanumeric chars.",
            "examples": [
              {
                "input": "s = \"A man, a plan, a canal: Panama\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length <= 2 * 10^5"
            ],
            "approach": "Two pointers at 0 and n-1 skipping non-alphanumeric characters.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        l, r = 0, len(s) - 1\n        while l < r:\n            while l < r and not s[l].isalnum(): l += 1\n            while l < r and not s[r].isalnum(): r -= 1\n            if s[l].lower() != s[r].lower(): return False\n            l += 1; r -= 1\n        return True",
              "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !isalnum(s[l])) l++;\n            while (l < r && !isalnum(s[r])) r--;\n            if (tolower(s[l]) != tolower(s[r])) return false;\n            l++; r--;\n        }\n        return true;\n    }\n};"
            }
          },
          {
            "id": "q-reverse-string",
            "title": "Reverse String",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/reverse-string/",
            "statement": "Reverse a character array string in-place.",
            "examples": [
              {
                "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
                "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
              }
            ],
            "constraints": [
              "1 <= s.length <= 10^5"
            ],
            "approach": "Swap characters at left and right pointers.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def reverseString(self, s: list[str]) -> None:\n        l, r = 0, len(s) - 1\n        while l < r:\n            s[l], s[r] = s[r], s[l]\n            l += 1; r -= 1",
              "java": "class Solution {\n    public void reverseString(char[] s) {\n        int l = 0, r = s.length - 1;\n        while (l < r) {\n            char tmp = s[l]; s[l] = s[r]; s[r] = tmp; l++; r--;\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        int l = 0, r = s.size() - 1;\n        while (l < r) swap(s[l++], s[r--]);\n    }\n};"
            }
          },
          {
            "id": "q-valid-palindrome-ii",
            "title": "Valid Palindrome II",
            "difficulty": "Easy",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/valid-palindrome-ii/",
            "statement": "Return true if string can be palindrome after deleting at most one character.",
            "examples": [
              {
                "input": "s = \"abca\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length <= 10^5"
            ],
            "approach": "Two pointers. On mismatch s[l] != s[r], check if s[l+1..r] or s[l..r-1] is palindrome.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        def is_p(l, r):\n            while l < r:\n                if s[l] != s[r]: return False\n                l += 1; r -= 1\n            return True\n        l, r = 0, len(s) - 1\n        while l < r:\n            if s[l] != s[r]: return is_p(l+1, r) or is_p(l, r-1)\n            l += 1; r -= 1\n        return True",
              "java": "class Solution {\n    public boolean validPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s.charAt(l) != s.charAt(r)) return isP(s, l + 1, r) || isP(s, l, r - 1);\n            l++; r--;\n        }\n        return true;\n    }\n    private boolean isP(String s, int l, int r) {\n        while (l < r) if (s.charAt(l++) != s.charAt(r--)) return false;\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool validPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s[l] != s[r]) return isP(s, l + 1, r) || isP(s, l, r - 1);\n            l++; r--;\n        }\n        return true;\n    }\n    bool isP(string& s, int l, int r) {\n        while (l < r) if (s[l++] != s[r--]) return false;\n        return true;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-string-sliding-window",
        "name": "Sliding Window (Strings)",
        "subtitle": "Substrings & Character Windows",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 3,
        "what": "Tracks character frequencies inside a dynamic sliding window over a string.",
        "when_to_use": "Longest substring without repeating characters, minimum window substring.",
        "how_to_identify": "Substring, unique character counts, frequency matching.",
        "intuition": "Maintain character frequency map. Shrink window when duplicates appear.",
        "step_by_step": [
          "Expand right pointer",
          "Update frequency map",
          "Shrink left pointer if constraint violated",
          "Record optimal metric"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(K) where K <= 128",
        "code_snippets": {
          "python": "def lengthOfLongestSubstring(s: str) -> int:\n    mp = {}; l = max_l = 0\n    for r in range(len(s)):\n        if s[r] in mp: l = max(l, mp[s[r]] + 1)\n        mp[s[r]] = r\n        max_l = max(max_l, r - l + 1)\n    return max_l",
          "java": "public int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int l = 0, maxL = 0;\n    for (int r = 0; r < s.length(); r++) {\n        char c = s.charAt(r);\n        if (map.containsKey(c)) l = Math.max(l, map.get(c) + 1);\n        map.put(c, r);\n        maxL = Math.max(maxL, r - l + 1);\n    }\n    return maxL;\n}",
          "cpp": "int lengthOfLongestSubstring(string s) {\n    unordered_map<char, int> mp;\n    int l = 0, maxL = 0;\n    for (int r = 0; r < s.length(); r++) {\n        if (mp.count(s[r])) l = max(l, mp[s[r]] + 1);\n        mp[s[r]] = r;\n        maxL = max(maxL, r - l + 1);\n    }\n    return maxL;\n}"
        },
        "questions": [
          {
            "id": "q-longest-substring-no-repeat",
            "title": "Longest Substring Without Repeating Characters",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "statement": "Length of the longest substring without repeating characters.",
            "examples": [
              {
                "input": "s = \"abcabcbb\"",
                "output": "3"
              }
            ],
            "constraints": [
              "0 <= s.length <= 5 * 10^4"
            ],
            "approach": "Sliding window with hash map storing last seen index.",
            "complexity": "Time: O(N), Space: O(min(N, M))",
            "code": {
              "python": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        mp = {}; l = ans = 0\n        for r, char in enumerate(s):\n            if char in mp: l = max(l, mp[char] + 1)\n            mp[char] = r; ans = max(ans, r - l + 1)\n        return ans",
              "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        int l = 0, ans = 0;\n        for (int r = 0; r < s.length(); r++) {\n            char c = s.charAt(r);\n            if (map.containsKey(c)) l = Math.max(l, map.get(c) + 1);\n            map.put(c, r); ans = Math.max(ans, r - l + 1);\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        unordered_map<char, int> mp;\n        int l = 0, ans = 0;\n        for (int r = 0; r < s.length(); r++) {\n            if (mp.count(s[r])) l = max(l, mp[s[r]] + 1);\n            mp[s[r]] = r; ans = max(ans, r - l + 1);\n        }\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-longest-repeating-character-replacement",
            "title": "Longest Repeating Character Replacement",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
            "statement": "Length of longest substring of same char after replacing at most k chars.",
            "examples": [
              {
                "input": "s = \"AABABBA\", k = 1",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= s.length <= 10^5"
            ],
            "approach": "Sliding window: (window_len - max_freq) <= k.",
            "complexity": "Time: O(N), Space: O(26)",
            "code": {
              "python": "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        count = {}; l = max_f = 0\n        for r in range(len(s)):\n            count[s[r]] = count.get(s[r], 0) + 1\n            max_f = max(max_f, count[s[r]])\n            if (r - l + 1) - max_f > k:\n                count[s[l]] -= 1; l += 1\n        return len(s) - l",
              "java": "class Solution {\n    public int characterReplacement(String s, int k) {\n        int[] count = new int[26]; int l = 0, maxF = 0;\n        for (int r = 0; r < s.length(); r++) {\n            maxF = Math.max(maxF, ++count[s.charAt(r) - 'A']);\n            if ((r - l + 1) - maxF > k) { count[s.charAt(l) - 'A']--; l++; }\n        }\n        return s.length() - l;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        vector<int> count(26, 0); int l = 0, maxF = 0;\n        for (int r = 0; r < s.length(); r++) {\n            maxF = max(maxF, ++count[s[r] - 'A']);\n            if ((r - l + 1) - maxF > k) { count[s[l] - 'A']--; l++; }\n        }\n        return s.length() - l;\n    }\n};"
            }
          },
          {
            "id": "q-minimum-window-substring",
            "title": "Minimum Window Substring",
            "difficulty": "Hard",
            "estimated_minutes": 30,
            "leetcode_url": "https://leetcode.com/problems/minimum-window-substring/",
            "statement": "Return minimum window substring of s containing all chars of t.",
            "examples": [
              {
                "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
                "output": "\"BANC\""
              }
            ],
            "constraints": [
              "1 <= s.length, t.length <= 10^5"
            ],
            "approach": "Two pointer sliding window with frequency array for t.",
            "complexity": "Time: O(N), Space: O(128)",
            "code": {
              "python": "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        if not t or not s: return \"\"\n        dict_t = Counter(t); req = len(dict_t); l = r = formed = 0\n        win = {}; ans = (float('inf'), None, None)\n        while r < len(s):\n            c = s[r]; win[c] = win.get(c, 0) + 1\n            if c in dict_t and win[c] == dict_t[c]: formed += 1\n            while l <= r and formed == req:\n                c = s[l]\n                if r - l + 1 < ans[0]: ans = (r - l + 1, l, r)\n                win[c] -= 1\n                if c in dict_t and win[c] < dict_t[c]: formed -= 1\n                l += 1\n            r += 1\n        return \"\" if ans[0] == float('inf') else s[ans[1]:ans[2]+1]",
              "java": "class Solution {\n    public String minWindow(String s, String t) {\n        if (s.length() < t.length()) return \"\";\n        int[] map = new int[128]; for (char c : t.toCharArray()) map[c]++;\n        int count = t.length(), l = 0, r = 0, minLen = Integer.MAX_VALUE, start = 0;\n        while (r < s.length()) {\n            if (map[s.charAt(r++)]-- > 0) count--;\n            while (count == 0) {\n                if (r - l < minLen) { minLen = r - l; start = l; }\n                if (map[s.charAt(l++)]++ == 0) count++;\n            }\n        }\n        return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        if (s.length() < t.length()) return \"\";\n        vector<int> map(128, 0); for (char c : t) map[c]++;\n        int count = t.length(), l = 0, r = 0, minLen = INT_MAX, start = 0;\n        while (r < s.length()) {\n            if (map[s[r++]]-- > 0) count--;\n            while (count == 0) {\n                if (r - l < minLen) { minLen = r - l; start = l; }\n                if (map[s[l++]]++ == 0) count++;\n            }\n        }\n        return minLen == INT_MAX ? \"\" : s.substr(start, minLen);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-frequency-hashing",
        "name": "Frequency Hashing",
        "subtitle": "Anagrams & Frequency Maps",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Uses character frequency arrays or HashMaps to verify reordered character equality.",
        "when_to_use": "Checking anagrams, grouping anagrams, finding anagram start indices.",
        "how_to_identify": "Anagram, character frequency equality.",
        "intuition": "Two strings are anagrams if and only if their character frequencies are identical.",
        "step_by_step": [
          "Build frequency array of size 26",
          "Compare counts"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(26)",
        "code_snippets": {
          "python": "def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t): return False\n    c = [0] * 26\n    for i in range(len(s)):\n        c[ord(s[i])-97] += 1; c[ord(t[i])-97] -= 1\n    return all(x == 0 for x in c)",
          "java": "public boolean isAnagram(String s, String t) {\n    if (s.length() != t.length()) return false;\n    int[] c = new int[26];\n    for (int i = 0; i < s.length(); i++) {\n        c[s.charAt(i) - 'a']++; c[t.charAt(i) - 'a']--;\n    }\n    for (int x : c) if (x != 0) return false;\n    return true;\n}",
          "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    vector<int> c(26, 0);\n    for (int i = 0; i < s.length(); i++) {\n        c[s[i] - 'a']++; c[t[i] - 'a']--;\n    }\n    for (int x : c) if (x != 0) return false;\n    return true;\n}"
        },
        "questions": [
          {
            "id": "q-valid-anagram",
            "title": "Valid Anagram",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/valid-anagram/",
            "statement": "Return true if t is an anagram of s.",
            "examples": [
              {
                "input": "s = \"anagram\", t = \"nagaram\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length, t.length <= 5 * 10^4"
            ],
            "approach": "Frequency array of size 26.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t): return False\n        c = [0] * 26\n        for i in range(len(s)): c[ord(s[i])-97] += 1; c[ord(t[i])-97] -= 1\n        return all(x == 0 for x in c)",
              "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] c = new int[26];\n        for (int i = 0; i < s.length(); i++) { c[s.charAt(i)-'a']++; c[t.charAt(i)-'a']--; }\n        for (int x : c) if (x != 0) return false;\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        if (s.length() != t.length()) return false;\n        vector<int> c(26, 0);\n        for (int i = 0; i < s.length(); i++) { c[s[i]-'a']++; c[t[i]-'a']--; }\n        for (int x : c) if (x != 0) return false;\n        return true;\n    }\n};"
            }
          },
          {
            "id": "q-group-anagrams",
            "title": "Group Anagrams",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/group-anagrams/",
            "statement": "Group an array of strings into anagram sets.",
            "examples": [
              {
                "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
                "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
              }
            ],
            "constraints": [
              "1 <= strs.length <= 10^4"
            ],
            "approach": "HashMap mapping sorted string key to list of original strings.",
            "complexity": "Time: O(N * K log K), Space: O(N * K)",
            "code": {
              "python": "class Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        mp = defaultdict(list)\n        for s in strs: mp[\"\".join(sorted(s))].append(s)\n        return list(mp.values())",
              "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] ca = s.toCharArray(); Arrays.sort(ca);\n            String key = String.valueOf(ca);\n            map.putIfAbsent(key, new ArrayList<>());\n            map.get(key).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> mp;\n        for (string s : strs) {\n            string key = s; sort(key.begin(), key.end());\n            mp[key].push_back(s);\n        }\n        vector<vector<string>> res;\n        for (auto& p : mp) res.push_back(p.second);\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-find-all-anagrams",
            "title": "Find All Anagrams in a String",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
            "statement": "Return all start indices of p's anagrams in s.",
            "examples": [
              {
                "input": "s = \"cbaebabacd\", p = \"abc\"",
                "output": "[0,6]"
              }
            ],
            "constraints": [
              "1 <= s.length, p.length <= 3 * 10^4"
            ],
            "approach": "Fixed sliding window of size len(p) comparing 26-element frequency arrays.",
            "complexity": "Time: O(N), Space: O(26)",
            "code": {
              "python": "class Solution:\n    def findAnagrams(self, s: str, p: str) -> list[int]:\n        if len(p) > len(s): return []\n        p_c = Counter(p); s_c = Counter(s[:len(p)-1]); res = []\n        for i in range(len(p)-1, len(s)):\n            s_c[s[i]] += 1\n            if s_c == p_c: res.append(i - len(p) + 1)\n            s_c[s[i - len(p) + 1]] -= 1\n            if s_c[s[i - len(p) + 1]] == 0: del s_c[s[i - len(p) + 1]]\n        return res",
              "java": "class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        List<Integer> res = new ArrayList<>();\n        if (s.length() < p.length()) return res;\n        int[] pC = new int[26], sC = new int[26];\n        for (int i = 0; i < p.length(); i++) { pC[p.charAt(i)-'a']++; sC[s.charAt(i)-'a']++; }\n        if (Arrays.equals(pC, sC)) res.add(0);\n        for (int i = p.length(); i < s.length(); i++) {\n            sC[s.charAt(i)-'a']++; sC[s.charAt(i-p.length())-'a']--;\n            if (Arrays.equals(pC, sC)) res.add(i - p.length() + 1);\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        vector<int> res;\n        if (s.length() < p.length()) return res;\n        vector<int> pC(26, 0), sC(26, 0);\n        for (int i = 0; i < p.length(); i++) { pC[p[i]-'a']++; sC[s[i]-'a']++; }\n        if (pC == sC) res.push_back(0);\n        for (int i = p.length(); i < s.length(); i++) {\n            sC[s[i]-'a']++; sC[s[i-p.length()]-'a']--;\n            if (pC == sC) res.push_back(i - p.length() + 1);\n        }\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-palindrome-string-patterns",
        "name": "Expand Around Center",
        "subtitle": "Palindromic Substrings",
        "difficulty": "Medium",
        "total_problems": 3,
        "what": "Expands outward from single character (odd length) or pair (even length) to check for palindromes.",
        "when_to_use": "Longest palindromic substring, total palindromic substring count.",
        "how_to_identify": "Longest palindrome substring, palindrome counts.",
        "intuition": "2N - 1 possible center points expanded in O(N) each.",
        "step_by_step": [
          "For each index i, expand for center (i, i) and (i, i+1)",
          "Track max palindrome length"
        ],
        "time_complexity": "O(N^2)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def longestPalindrome(s: str) -> str:\n    res = \"\"\n    for i in range(len(s)):\n        l, r = i, i\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if r - l + 1 > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n        l, r = i, i + 1\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if r - l + 1 > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n    return res",
          "java": "public String longestPalindrome(String s) {\n    int start = 0, maxLen = 0;\n    for (int i = 0; i < s.length(); i++) {\n        int len = Math.max(expand(s, i, i), expand(s, i, i + 1));\n        if (len > maxLen) { maxLen = len; start = i - (len - 1) / 2; }\n    }\n    return s.substring(start, start + maxLen);\n}\nprivate int expand(String s, int l, int r) {\n    while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }\n    return r - l - 1;\n}",
          "cpp": "string longestPalindrome(string s) {\n    int start = 0, maxLen = 0;\n    auto expand = [&](int l, int r) {\n        while (l >= 0 && r < s.length() && s[l] == s[r]) { l--; r++; }\n        return r - l - 1;\n    };\n    for (int i = 0; i < s.length(); i++) {\n        int len = max(expand(i, i), expand(i, i + 1));\n        if (len > maxLen) { maxLen = len; start = i - (len - 1) / 2; }\n    }\n    return s.substr(start, maxLen);\n}"
        },
        "questions": [
          {
            "id": "q-longest-palindromic-substring",
            "title": "Longest Palindromic Substring",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/longest-palindromic-substring/",
            "statement": "Return the longest palindromic substring in s.",
            "examples": [
              {
                "input": "s = \"babad\"",
                "output": "\"bab\""
              }
            ],
            "constraints": [
              "1 <= s.length <= 1000"
            ],
            "approach": "Expand around center for odd and even length centers.",
            "complexity": "Time: O(N^2), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        res = \"\"\n        for i in range(len(s)):\n            l, r = i, i\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                if r - l + 1 > len(res): res = s[l:r+1]\n                l -= 1; r += 1\n            l, r = i, i + 1\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                if r - l + 1 > len(res): res = s[l:r+1]\n                l -= 1; r += 1\n        return res",
              "java": "class Solution {\n    public String longestPalindrome(String s) {\n        int start = 0, maxLen = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int len = Math.max(expand(s, i, i), expand(s, i, i + 1));\n            if (len > maxLen) { maxLen = len; start = i - (len - 1) / 2; }\n        }\n        return s.substring(start, start + maxLen);\n    }\n    private int expand(String s, int l, int r) {\n        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }\n        return r - l - 1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        int start = 0, maxLen = 0;\n        auto expand = [&](int l, int r) {\n            while (l >= 0 && r < s.length() && s[l] == s[r]) { l--; r++; }\n            return r - l - 1;\n        };\n        for (int i = 0; i < s.length(); i++) {\n            int len = max(expand(i, i), expand(i, i + 1));\n            if (len > maxLen) { maxLen = len; start = i - (len - 1) / 2; }\n        }\n        return s.substr(start, maxLen);\n    }\n};"
            }
          },
          {
            "id": "q-palindromic-substrings",
            "title": "Palindromic Substrings",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/palindromic-substrings/",
            "statement": "Return the number of palindromic substrings in s.",
            "examples": [
              {
                "input": "s = \"aaa\"",
                "output": "6"
              }
            ],
            "constraints": [
              "1 <= s.length <= 1000"
            ],
            "approach": "Expand around center and count every valid palindrome match.",
            "complexity": "Time: O(N^2), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        ans = 0\n        for i in range(len(s)):\n            l, r = i, i\n            while l >= 0 and r < len(s) and s[l] == s[r]: ans += 1; l -= 1; r += 1\n            l, r = i, i + 1\n            while l >= 0 and r < len(s) and s[l] == s[r]: ans += 1; l -= 1; r += 1\n        return ans",
              "java": "class Solution {\n    public int countSubstrings(String s) {\n        int ans = 0;\n        for (int i = 0; i < s.length(); i++) ans += expand(s, i, i) + expand(s, i, i + 1);\n        return ans;\n    }\n    private int expand(String s, int l, int r) {\n        int c = 0;\n        while (l >= 0 && r < s.length() && s.charAt(l--) == s.charAt(r++)) c++;\n        return c;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int countSubstrings(string s) {\n        int ans = 0;\n        auto expand = [&](int l, int r) {\n            int c = 0;\n            while (l >= 0 && r < s.length() && s[l--] == s[r++]) c++;\n            return c;\n        };\n        for (int i = 0; i < s.length(); i++) ans += expand(i, i) + expand(i, i + 1);\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-string-to-integer-atoi",
            "title": "String to Integer (atoi)",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/string-to-integer-atoi/",
            "statement": "Convert string to a 32-bit signed integer with whitespace and boundary handling.",
            "examples": [
              {
                "input": "s = \" -042\"",
                "output": "-42"
              }
            ],
            "constraints": [
              "0 <= s.length <= 200"
            ],
            "approach": "Ignore whitespace, read sign, parse digits while checking 32-bit overflow bounds.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def myAtoi(self, s: str) -> int:\n        s = s.lstrip()\n        if not s: return 0\n        sign = 1; idx = 0\n        if s[0] in ['-', '+']:\n            sign = -1 if s[0] == '-' else 1; idx = 1\n        res = 0\n        while idx < len(s) and s[idx].isdigit():\n            res = res * 10 + int(s[idx]); idx += 1\n        res *= sign\n        return max(-2**31, min(2**31 - 1, res))",
              "java": "class Solution {\n    public int myAtoi(String s) {\n        int idx = 0, sign = 1, total = 0;\n        while (idx < s.length() && s.charAt(idx) == ' ') idx++;\n        if (idx < s.length() && (s.charAt(idx) == '+' || s.charAt(idx) == '-')) {\n            sign = s.charAt(idx) == '-' ? -1 : 1; idx++;\n        }\n        while (idx < s.length()) {\n            int digit = s.charAt(idx) - '0';\n            if (digit < 0 || digit > 9) break;\n            if (Integer.MAX_VALUE / 10 < total || (Integer.MAX_VALUE / 10 == total && Integer.MAX_VALUE % 10 < digit))\n                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;\n            total = 10 * total + digit; idx++;\n        }\n        return total * sign;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int myAtoi(string s) {\n        int idx = 0, sign = 1, total = 0;\n        while (idx < s.length() && s[idx] == ' ') idx++;\n        if (idx < s.length() && (s[idx] == '+' || s[idx] == '-')) {\n            sign = (s[idx] == '-') ? -1 : 1; idx++;\n        }\n        while (idx < s.length() && isdigit(s[idx])) {\n            int digit = s[idx] - '0';\n            if (total > INT_MAX / 10 || (total == INT_MAX / 10 && digit > 7))\n                return sign == 1 ? INT_MAX : INT_MIN;\n            total = 10 * total + digit; idx++;\n        }\n        return total * sign;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-sorting-searching",
    "name": "Sorting & Searching",
    "description": "Master Binary Search on arrays and answer spaces, custom sorting algorithms, and matrix searching.",
    "icon": "Search",
    "total_patterns": 4,
    "total_problems": 10,
    "patterns": [
      {
        "id": "pattern-binary-search-array",
        "name": "Binary Search on Array",
        "subtitle": "Search Space Halving",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Divides search space in half repeatedly on sorted arrays.",
        "when_to_use": "Finding element target or boundary index in sorted array.",
        "how_to_identify": "Sorted array input, target search.",
        "intuition": "Compare mid element with target to eliminate half the search space in O(log N).",
        "step_by_step": [
          "low = 0, high = n - 1",
          "while low <= high: mid = low + (high - low) // 2",
          "if arr[mid] == target return mid",
          "adjust low or high"
        ],
        "time_complexity": "O(log N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def binarySearch(nums: list[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: l = mid + 1\n        else: r = mid - 1\n    return -1",
          "java": "public int search(int[] nums, int target) {\n    int l = 0, r = nums.length - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}",
          "cpp": "int search(vector<int>& nums, int target) {\n    int l = 0, r = nums.size() - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}"
        },
        "questions": [
          {
            "id": "q-binary-search",
            "title": "Binary Search",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/binary-search/",
            "statement": "Given sorted array nums and target, return index of target or -1.",
            "examples": [
              {
                "input": "nums = [-1,0,3,5,9,12], target = 9",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Standard binary search with two pointers.",
            "complexity": "Time: O(log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target: return mid\n            elif nums[mid] < target: l = mid + 1\n            else: r = mid - 1\n        return -1",
              "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1; else r = mid - 1;\n        }\n        return -1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1; else r = mid - 1;\n        }\n        return -1;\n    }\n};"
            }
          },
          {
            "id": "q-search-rotated-sorted-array",
            "title": "Search in Rotated Sorted Array",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            "statement": "Search target in rotated sorted array of unique values.",
            "examples": [
              {
                "input": "nums = [4,5,6,7,0,1,2], target = 0",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 5000"
            ],
            "approach": "Binary search checking which half (left or right) is sorted.",
            "complexity": "Time: O(log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            m = (l + r) // 2\n            if nums[m] == target: return m\n            if nums[l] <= nums[m]:\n                if nums[l] <= target < nums[m]: r = m - 1\n                else: l = m + 1\n            else:\n                if nums[m] < target <= nums[r]: l = m + 1\n                else: r = m - 1\n        return -1",
              "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) return m;\n            if (nums[l] <= nums[m]) {\n                if (nums[l] <= target && target < nums[m]) r = m - 1;\n                else l = m + 1;\n            } else {\n                if (nums[m] < target && target <= nums[r]) l = m + 1;\n                else r = m - 1;\n            }\n        }\n        return -1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n        while (l <= r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) return m;\n            if (nums[l] <= nums[m]) {\n                if (nums[l] <= target && target < nums[m]) r = m - 1;\n                else l = m + 1;\n            } else {\n                if (nums[m] < target && target <= nums[r]) l = m + 1;\n                else r = m - 1;\n            }\n        }\n        return -1;\n    }\n};"
            }
          },
          {
            "id": "q-find-first-last-position",
            "title": "Find First and Last Position of Element in Sorted Array",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            "statement": "Find starting and ending position of a target value in sorted array.",
            "examples": [
              {
                "input": "nums = [5,7,7,8,8,10], target = 8",
                "output": "[3,4]"
              }
            ],
            "constraints": [
              "0 <= nums.length <= 10^5"
            ],
            "approach": "Two binary searches for lower and upper bound.",
            "complexity": "Time: O(log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def searchRange(self, nums: list[int], target: int) -> list[int]:\n        def bound(is_first):\n            l, r, ans = 0, len(nums) - 1, -1\n            while l <= r:\n                m = (l + r) // 2\n                if nums[m] == target:\n                    ans = m\n                    if is_first: r = m - 1\n                    else: l = m + 1\n                elif nums[m] < target: l = m + 1\n                else: r = m - 1\n            return ans\n        return [bound(True), bound(False)]",
              "java": "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        return new int[]{findBound(nums, target, true), findBound(nums, target, false)};\n    }\n    private int findBound(int[] nums, int target, boolean isFirst) {\n        int l = 0, r = nums.length - 1, ans = -1;\n        while (l <= r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) {\n                ans = m; if (isFirst) r = m - 1; else l = m + 1;\n            } else if (nums[m] < target) l = m + 1; else r = m - 1;\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        auto bound = [&](bool isFirst) {\n            int l = 0, r = nums.size() - 1, ans = -1;\n            while (l <= r) {\n                int m = l + (r - l) / 2;\n                if (nums[m] == target) {\n                    ans = m; if (isFirst) r = m - 1; else l = m + 1;\n                } else if (nums[m] < target) l = m + 1; else r = m - 1;\n            }\n            return ans;\n        };\n        return {bound(true), bound(false)};\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-binary-search-answer-space",
        "name": "Binary Search on Answer Space",
        "subtitle": "Parametric Search",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 2,
        "what": "Searches over range of possible answers when monotonic condition holds.",
        "when_to_use": "Minimizing maximum value, maximizing minimum distance.",
        "how_to_identify": "Find minimum/maximum parameter satisfying feasibility condition.",
        "intuition": "Define feasibility function condition(mid). Binary search on low..high answer domain.",
        "step_by_step": [
          "Identify low = min_possible, high = max_possible",
          "while low <= high:",
          "mid = (low + high) // 2",
          "if check(mid): ans = mid, high = mid - 1 else: low = mid + 1"
        ],
        "time_complexity": "O(N log(Range))",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    l, r = 1, max(piles)\n    while l < r:\n        m = (l + r) // 2\n        if sum((p + m - 1) // m for p in piles) <= h: r = m\n        else: l = m + 1\n    return l",
          "java": "public int minEatingSpeed(int[] piles, int h) {\n    int l = 1, r = 0;\n    for (int p : piles) r = Math.max(r, p);\n    while (l < r) {\n        int m = l + (r - l) / 2, hours = 0;\n        for (int p : piles) hours += (p + m - 1) / m;\n        if (hours <= h) r = m; else l = m + 1;\n    }\n    return l;\n}",
          "cpp": "int minEatingSpeed(vector<int>& piles, int h) {\n    int l = 1, r = *max_element(piles.begin(), piles.end());\n    while (l < r) {\n        int m = l + (r - l) / 2, hours = 0;\n        for (int p : piles) hours += (p + m - 1) / m;\n        if (hours <= h) r = m; else l = m + 1;\n    }\n    return l;\n}"
        },
        "questions": [
          {
            "id": "q-koko-eating-bananas",
            "title": "Koko Eating Bananas",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/koko-eating-bananas/",
            "statement": "Find minimum eating speed k to eat all bananas within h hours.",
            "examples": [
              {
                "input": "piles = [3,6,7,11], h = 8",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= piles.length <= 10^4, piles[i] <= 10^9"
            ],
            "approach": "Binary search speed range [1, max(piles)].",
            "complexity": "Time: O(N log(max(piles))), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def minEatingSpeed(self, piles: list[int], h: int) -> int:\n        l, r = 1, max(piles)\n        while l < r:\n            m = (l + r) // 2\n            if sum((p + m - 1) // m for p in piles) <= h: r = m\n            else: l = m + 1\n        return l",
              "java": "class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        int l = 1, r = 0;\n        for (int p : piles) r = Math.max(r, p);\n        while (l < r) {\n            int m = l + (r - l) / 2, hours = 0;\n            for (int p : piles) hours += (p + m - 1) / m;\n            if (hours <= h) r = m; else l = m + 1;\n        }\n        return l;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        int l = 1, r = *max_element(piles.begin(), piles.end());\n        while (l < r) {\n            int m = l + (r - l) / 2, hours = 0;\n            for (int p : piles) hours += (p + m - 1) / m;\n            if (hours <= h) r = m; else l = m + 1;\n        }\n        return l;\n    }\n};"
            }
          },
          {
            "id": "q-capacity-ship-packages",
            "title": "Capacity To Ship Packages Within D Days",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
            "statement": "Find least weight capacity of ship to transport all packages within days.",
            "examples": [
              {
                "input": "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
                "output": "15"
              }
            ],
            "constraints": [
              "1 <= days <= weights.length <= 5 * 10^4"
            ],
            "approach": "Binary search capacity range [max(weights), sum(weights)].",
            "complexity": "Time: O(N log(sum(weights))), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def shipWithinDays(self, weights: list[int], days: int) -> int:\n        l, r = max(weights), sum(weights)\n        while l < r:\n            m = (l + r) // 2; d = 1; curr = 0\n            for w in weights:\n                if curr + w > m: d += 1; curr = 0\n                curr += w\n            if d <= days: r = m\n            else: l = m + 1\n        return l",
              "java": "class Solution {\n    public int shipWithinDays(int[] weights, int days) {\n        int l = 0, r = 0;\n        for (int w : weights) { l = Math.max(l, w); r += w; }\n        while (l < r) {\n            int m = l + (r - l) / 2, d = 1, curr = 0;\n            for (int w : weights) {\n                if (curr + w > m) { d++; curr = 0; }\n                curr += w;\n            }\n            if (d <= days) r = m; else l = m + 1;\n        }\n        return l;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int shipWithinDays(vector<int>& weights, int days) {\n        int l = *max_element(weights.begin(), weights.end());\n        int r = accumulate(weights.begin(), weights.end(), 0);\n        while (l < r) {\n            int m = l + (r - l) / 2, d = 1, curr = 0;\n            for (int w : weights) {\n                if (curr + w > m) { d++; curr = 0; }\n                curr += w;\n            }\n            if (d <= days) r = m; else l = m + 1;\n        }\n        return l;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-sorting-algorithms",
        "name": "Sorting & Custom Partitioning",
        "subtitle": "Dutch National Flag & Partitioning",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Rearranges elements based on pivot partitioning or custom comparator functions.",
        "when_to_use": "Sort colors, merge intervals.",
        "how_to_identify": "In-place partitioning, 3-way split.",
        "intuition": "Use low, mid, high pointers to partition array into 3 sections in single O(N) pass.",
        "step_by_step": [
          "Initialize low = 0, mid = 0, high = n - 1",
          "while mid <= high:",
          "if arr[mid] == 0: swap(low, mid), low++, mid++",
          "elif arr[mid] == 1: mid++",
          "else: swap(mid, high), high--"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def sortColors(nums: list[int]) -> None:\n    l, m, h = 0, 0, len(nums) - 1\n    while m <= h:\n        if nums[m] == 0:\n            nums[l], nums[m] = nums[m], nums[l]; l += 1; m += 1\n        elif nums[m] == 1: m += 1\n        else:\n            nums[m], nums[h] = nums[h], nums[m]; h -= 1",
          "java": "public void sortColors(int[] nums) {\n    int l = 0, m = 0, h = nums.length - 1;\n    while (m <= h) {\n        if (nums[m] == 0) {\n            int tmp = nums[l]; nums[l++] = nums[m]; nums[m++] = tmp;\n        } else if (nums[m] == 1) m++;\n        else {\n            int tmp = nums[m]; nums[m] = nums[h]; nums[h--] = tmp;\n        }\n    }\n}",
          "cpp": "void sortColors(vector<int>& nums) {\n    int l = 0, m = 0, h = nums.size() - 1;\n    while (m <= h) {\n        if (nums[m] == 0) swap(nums[l++], nums[m++]);\n        else if (nums[m] == 1) m++;\n        else swap(nums[m], nums[h--]);\n    }\n}"
        },
        "questions": [
          {
            "id": "q-sort-colors",
            "title": "Sort Colors",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/sort-colors/",
            "statement": "Sort array with objects colored red (0), white (1), or blue (2) in-place.",
            "examples": [
              {
                "input": "nums = [2,0,2,1,1,0]",
                "output": "[0,0,1,1,2]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 300"
            ],
            "approach": "Dutch National Flag 3-pointer partition.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def sortColors(self, nums: list[int]) -> None:\n        l, m, h = 0, 0, len(nums) - 1\n        while m <= h:\n            if nums[m] == 0:\n                nums[l], nums[m] = nums[m], nums[l]; l += 1; m += 1\n            elif nums[m] == 1: m += 1\n            else:\n                nums[m], nums[h] = nums[h], nums[m]; h -= 1",
              "java": "class Solution {\n    public void sortColors(int[] nums) {\n        int l = 0, m = 0, h = nums.length - 1;\n        while (m <= h) {\n            if (nums[m] == 0) {\n                int tmp = nums[l]; nums[l++] = nums[m]; nums[m++] = tmp;\n            } else if (nums[m] == 1) m++;\n            else {\n                int tmp = nums[m]; nums[m] = nums[h]; nums[h--] = tmp;\n            }\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int l = 0, m = 0, h = nums.size() - 1;\n        while (m <= h) {\n            if (nums[m] == 0) swap(nums[l++], nums[m++]);\n            else if (nums[m] == 1) m++;\n            else swap(nums[m], nums[h--]);\n        }\n    }\n};"
            }
          },
          {
            "id": "q-merge-intervals",
            "title": "Merge Intervals",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/merge-intervals/",
            "statement": "Merge all overlapping intervals.",
            "examples": [
              {
                "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
                "output": "[[1,6],[8,10],[15,18]]"
              }
            ],
            "constraints": [
              "1 <= intervals.length <= 10^4"
            ],
            "approach": "Sort intervals by start time and merge.",
            "complexity": "Time: O(N log N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        intervals.sort(key=lambda x: x[0]); res = []\n        for interval in intervals:\n            if not res or res[-1][1] < interval[0]: res.append(interval)\n            else: res[-1][1] = max(res[-1][1], interval[1])\n        return res",
              "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        for (int[] interval : intervals) {\n            if (res.isEmpty() || res.get(res.size() - 1)[1] < interval[0]) res.add(interval);\n            else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], interval[1]);\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        sort(intervals.begin(), intervals.end()); vector<vector<int>> res;\n        for (auto& interval : intervals) {\n            if (res.empty() || res.back()[1] < interval[0]) res.push_back(interval);\n            else res.back()[1] = max(res.back()[1], interval[1]);\n        }\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-2d-matrix-search",
        "name": "Searching 2D Matrix",
        "subtitle": "Matrix Elimination",
        "difficulty": "Medium",
        "total_problems": 3,
        "what": "Eliminates rows or columns in 2D sorted matrices using corner pointers.",
        "when_to_use": "Search a 2D Matrix, Search a 2D Matrix II, Find Min in Rotated Array.",
        "how_to_identify": "Sorted matrix search.",
        "intuition": "Start at top-right corner (row 0, col N-1). If target < val, move left; if target > val, move down.",
        "step_by_step": [
          "r = 0, c = cols - 1",
          "while r < rows and c >= 0:",
          "if matrix[r][c] == target: return True",
          "elif matrix[r][c] > target: c-- else: r++"
        ],
        "time_complexity": "O(M + N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    if not matrix: return False\n    r, c = 0, len(matrix[0]) - 1\n    while r < len(matrix) and c >= 0:\n        if matrix[r][c] == target: return True\n        elif matrix[r][c] > target: c -= 1\n        else: r += 1\n    return False",
          "java": "public boolean searchMatrix(int[][] matrix, int target) {\n    int r = 0, c = matrix[0].length - 1;\n    while (r < matrix.length && c >= 0) {\n        if (matrix[r][c] == target) return true;\n        else if (matrix[r][c] > target) c--;\n        else r++;\n    }\n    return false;\n}",
          "cpp": "bool searchMatrix(vector<vector<int>>& matrix, int target) {\n    int r = 0, c = matrix[0].size() - 1;\n    while (r < matrix.size() && c >= 0) {\n        if (matrix[r][c] == target) return true;\n        else if (matrix[r][c] > target) c--;\n        else r++;\n    }\n    return false;\n}"
        },
        "questions": [
          {
            "id": "q-search-2d-matrix",
            "title": "Search a 2D Matrix",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/search-a-2d-matrix/",
            "statement": "Search target in m x n matrix where rows and columns are sorted.",
            "examples": [
              {
                "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
                "output": "true"
              }
            ],
            "constraints": [
              "m == matrix.length, n == matrix[0].length"
            ],
            "approach": "Treat matrix as flattened 1D array for binary search.",
            "complexity": "Time: O(log(M*N)), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        m, n = len(matrix), len(matrix[0]); l, r = 0, m * n - 1\n        while l <= r:\n            mid = (l + r) // 2; val = matrix[mid // n][mid % n]\n            if val == target: return True\n            elif val < target: l = mid + 1\n            else: r = mid - 1\n        return False",
              "java": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        int m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2, val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            if (val < target) l = mid + 1; else r = mid - 1;\n        }\n        return false;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int m = matrix.size(), n = matrix[0].size(), l = 0, r = m * n - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2, val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            if (val < target) l = mid + 1; else r = mid - 1;\n        }\n        return false;\n    }\n};"
            }
          },
          {
            "id": "q-search-2d-matrix-ii",
            "title": "Search a 2D Matrix II",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
            "statement": "Search target in matrix where rows and cols are independently sorted.",
            "examples": [
              {
                "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22]], target = 5",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= m, n <= 300"
            ],
            "approach": "Start top-right corner. Move left if > target, down if < target.",
            "complexity": "Time: O(M + N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        r, c = 0, len(matrix[0]) - 1\n        while r < len(matrix) and c >= 0:\n            if matrix[r][c] == target: return True\n            elif matrix[r][c] > target: c -= 1\n            else: r += 1\n        return False",
              "java": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        int r = 0, c = matrix[0].length - 1;\n        while (r < matrix.length && c >= 0) {\n            if (matrix[r][c] == target) return true;\n            if (matrix[r][c] > target) c--; else r++;\n        }\n        return false;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int r = 0, c = matrix[0].size() - 1;\n        while (r < matrix.size() && c >= 0) {\n            if (matrix[r][c] == target) return true;\n            if (matrix[r][c] > target) c--; else r++;\n        }\n        return false;\n    }\n};"
            }
          },
          {
            "id": "q-find-minimum-in-rotated-sorted-array",
            "title": "Find Minimum in Rotated Sorted Array",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            "statement": "Find minimum element in rotated sorted array of unique elements.",
            "examples": [
              {
                "input": "nums = [3,4,5,1,2]",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 5000"
            ],
            "approach": "Binary search comparing nums[mid] with nums[right].",
            "complexity": "Time: O(log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        l, r = 0, len(nums) - 1\n        while l < r:\n            m = (l + r) // 2\n            if nums[m] > nums[r]: l = m + 1\n            else: r = m\n        return nums[l]",
              "java": "class Solution {\n    public int findMin(int[] nums) {\n        int l = 0, r = nums.length - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] > nums[r]) l = m + 1; else r = m;\n        }\n        return nums[l];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        int l = 0, r = nums.size() - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] > nums[r]) l = m + 1; else r = m;\n        }\n        return nums[l];\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-linked-list",
    "name": "Linked List",
    "description": "Master linked list pointer manipulation, fast & slow pointers, node reversal, and list merging.",
    "icon": "Link",
    "total_patterns": 4,
    "total_problems": 10,
    "patterns": [
      {
        "id": "pattern-fast-slow-pointers",
        "name": "Fast & Slow Pointers",
        "subtitle": "Cycle Detection & Midpoint",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Uses two pointers moving at different speeds (slow moves 1 step, fast moves 2 steps).",
        "when_to_use": "Detecting cycles in linked list, finding middle node, detecting cycle entry node.",
        "how_to_identify": "Linked list cycle detection, middle node without extra space.",
        "intuition": "Fast pointer travels twice as fast as slow pointer. If a cycle exists, fast and slow pointers will meet.",
        "step_by_step": [
          "Initialize slow = head, fast = head",
          "Move slow 1 step, fast 2 steps",
          "If slow == fast, cycle detected",
          "Return middle or entry point"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def hasCycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False",
          "java": "public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
          "cpp": "bool hasCycle(ListNode *head) {\n    ListNode *slow = head, *fast = head;\n    while (fast && fast->next) {\n        slow = slow->next; fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}"
        },
        "questions": [
          {
            "id": "q-linked-list-cycle",
            "title": "Linked List Cycle",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/linked-list-cycle/",
            "statement": "Determine if the linked list has a cycle in it.",
            "examples": [
              {
                "input": "head = [3,2,0,-4], pos = 1",
                "output": "true"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 10^4"
            ],
            "approach": "Floyd's Cycle Finding Algorithm (Fast & Slow Pointers).",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n            if slow == fast: return True\n        return False",
              "java": "public class Solution {\n    public boolean hasCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next; fast = fast->next->next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n};"
            }
          },
          {
            "id": "q-middle-of-linked-list",
            "title": "Middle of the Linked List",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/middle-of-the-linked-list/",
            "statement": "Return the middle node of the linked list. If two middle nodes exist, return the second middle node.",
            "examples": [
              {
                "input": "head = [1,2,3,4,5]",
                "output": "[3,4,5]"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 100"
            ],
            "approach": "Move slow 1 step, fast 2 steps. When fast reaches end, slow is at middle.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n        return slow",
              "java": "class Solution {\n    public ListNode middleNode(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n        }\n        return slow;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* middleNode(ListNode* head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next; fast = fast->next->next;\n        }\n        return slow;\n    }\n};"
            }
          },
          {
            "id": "q-linked-list-cycle-ii",
            "title": "Linked List Cycle II",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/linked-list-cycle-ii/",
            "statement": "Return the node where the cycle begins. If no cycle, return null.",
            "examples": [
              {
                "input": "head = [3,2,0,-4], pos = 1",
                "output": "tail connects to node index 1"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 10^4"
            ],
            "approach": "Floyd's algorithm. When fast & slow meet, reset slow to head and move both 1 step until they meet at cycle entry.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n            if slow == fast:\n                slow = head\n                while slow != fast:\n                    slow = slow.next; fast = fast.next\n                return slow\n        return None",
              "java": "public class Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n            if (slow == fast) {\n                slow = head;\n                while (slow != fast) {\n                    slow = slow.next; fast = fast.next;\n                }\n                return slow;\n            }\n        }\n        return null;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next; fast = fast->next->next;\n            if (slow == fast) {\n                slow = head;\n                while (slow != fast) {\n                    slow = slow->next; fast = fast->next;\n                }\n                return slow;\n            }\n        }\n        return NULL;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-linked-list-reversal",
        "name": "Linked List Reversal",
        "subtitle": "Node Pointer Swapping",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Reverses next pointers of nodes iteratively using previous, current, and next pointers.",
        "when_to_use": "Reversing entire list, sublist reversal [left, right], checking palindrome list.",
        "how_to_identify": "Reverse list, sublist reversal, palindrome list.",
        "intuition": "Iteratively update curr.next = prev while maintaining next_node reference.",
        "step_by_step": [
          "Initialize prev = None, curr = head",
          "Save next_node = curr.next",
          "Set curr.next = prev",
          "Advance prev = curr, curr = next_node"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def reverseList(head):\n    prev = None; curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr; curr = nxt\n    return prev",
          "java": "public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode nxt = curr.next;\n        curr.next = prev;\n        prev = curr; curr = nxt;\n    }\n    return prev;\n}",
          "cpp": "ListNode* reverseList(ListNode* head) {\n    ListNode *prev = NULL, *curr = head;\n    while (curr) {\n        ListNode *nxt = curr->next;\n        curr->next = prev;\n        prev = curr; curr = nxt;\n    }\n    return prev;\n}"
        },
        "questions": [
          {
            "id": "q-reverse-linked-list",
            "title": "Reverse Linked List",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/reverse-linked-list/",
            "statement": "Reverse a singly linked list.",
            "examples": [
              {
                "input": "head = [1,2,3,4,5]",
                "output": "[5,4,3,2,1]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 5000"
            ],
            "approach": "Iterative pointer reversal using prev, curr, next.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        prev = None; curr = head\n        while curr:\n            nxt = curr.next; curr.next = prev; prev = curr; curr = nxt\n        return prev",
              "java": "class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null, curr = head;\n        while (curr != null) {\n            ListNode nxt = curr.next; curr.next = prev; prev = curr; curr = nxt;\n        }\n        return prev;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode *prev = NULL, *curr = head;\n        while (curr) {\n            ListNode *nxt = curr->next; curr->next = prev; prev = curr; curr = nxt;\n        }\n        return prev;\n    }\n};"
            }
          },
          {
            "id": "q-reverse-linked-list-ii",
            "title": "Reverse Linked List II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/reverse-linked-list-ii/",
            "statement": "Reverse the nodes of the list from position left to position right.",
            "examples": [
              {
                "input": "head = [1,2,3,4,5], left = 2, right = 4",
                "output": "[1,4,3,2,5]"
              }
            ],
            "constraints": [
              "1 <= left <= right <= n"
            ],
            "approach": "Traverse to node left-1, reverse sublist of length right-left+1, reconnect.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:\n        if not head or left == right: return head\n        dummy = ListNode(0, head); prev = dummy\n        for _ in range(left - 1): prev = prev.next\n        curr = prev.next\n        for _ in range(right - left):\n            nxt = curr.next; curr.next = nxt.next; nxt.next = prev.next; prev.next = nxt\n        return dummy.next",
              "java": "class Solution {\n    public ListNode reverseBetween(ListNode head, int left, int right) {\n        if (head == null || left == right) return head;\n        ListNode dummy = new ListNode(0, head), prev = dummy;\n        for (int i = 0; i < left - 1; i++) prev = prev.next;\n        ListNode curr = prev.next;\n        for (int i = 0; i < right - left; i++) {\n            ListNode nxt = curr.next; curr.next = nxt.next; nxt.next = prev.next; prev.next = nxt;\n        }\n        return dummy.next;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int left, int right) {\n        if (!head || left == right) return head;\n        ListNode dummy(0, head), *prev = &dummy;\n        for (int i = 0; i < left - 1; i++) prev = prev->next;\n        ListNode *curr = prev->next;\n        for (int i = 0; i < right - left; i++) {\n            ListNode *nxt = curr->next; curr->next = nxt->next; nxt->next = prev->next; prev->next = nxt;\n        }\n        return dummy.next;\n    }\n};"
            }
          },
          {
            "id": "q-palindrome-linked-list",
            "title": "Palindrome Linked List",
            "difficulty": "Easy",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/palindrome-linked-list/",
            "statement": "Given the head of a singly linked list, return true if it is a palindrome.",
            "examples": [
              {
                "input": "head = [1,2,2,1]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 10^5"
            ],
            "approach": "Find middle with fast/slow pointers. Reverse second half. Compare values.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n        prev = None\n        while slow:\n            nxt = slow.next; slow.next = prev; prev = slow; slow = nxt\n        while prev:\n            if head.val != prev.val: return False\n            head = head.next; prev = prev.next\n        return True",
              "java": "class Solution {\n    public boolean isPalindrome(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n        }\n        ListNode prev = null;\n        while (slow != null) {\n            ListNode nxt = slow.next; slow.next = prev; prev = slow; slow = nxt;\n        }\n        while (prev != null) {\n            if (head.val != prev.val) return false;\n            head = head.next; prev = prev.next;\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) { slow = slow->next; fast = fast->next->next; }\n        ListNode *prev = NULL;\n        while (slow) { ListNode *nxt = slow->next; slow->next = prev; prev = slow; slow = nxt; }\n        while (prev) {\n            if (head->val != prev->val) return false;\n            head = head->next; prev = prev->next;\n        }\n        return true;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-merge-linked-lists",
        "name": "Merge Lists",
        "subtitle": "Sorted List Merging",
        "difficulty": "Easy \u2192 Hard",
        "total_problems": 2,
        "what": "Merges sorted linked lists into a single sorted list using dummy nodes.",
        "when_to_use": "Merging two sorted lists, merging k sorted lists.",
        "how_to_identify": "Merge sorted lists, combine linked list components.",
        "intuition": "Compare head values of input lists, attach smaller node to merged tail, advance pointer.",
        "step_by_step": [
          "Create dummy node and tail pointer",
          "While list1 and list2 are non-null, append smaller node to tail",
          "Append remaining non-null list"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def mergeTwoLists(l1, l2):\n    dummy = tail = ListNode(0)\n    while l1 and l2:\n        if l1.val <= l2.val:\n            tail.next = l1; l1 = l1.next\n        else:\n            tail.next = l2; l2 = l2.next\n        tail = tail.next\n    tail.next = l1 or l2\n    return dummy.next",
          "java": "public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n        else { tail.next = l2; l2 = l2.next; }\n        tail = tail.next;\n    }\n    tail.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
          "cpp": "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0), *tail = &dummy;\n    while (l1 && l2) {\n        if (l1->val <= l2->val) { tail->next = l1; l1 = l1->next; }\n        else { tail->next = l2; l2 = l2->next; }\n        tail = tail->next;\n    }\n    tail->next = l1 ? l1 : l2;\n    return dummy.next;\n}"
        },
        "questions": [
          {
            "id": "q-merge-two-sorted-lists",
            "title": "Merge Two Sorted Lists",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/merge-two-sorted-lists/",
            "statement": "Merge two sorted linked lists and return it as a sorted list.",
            "examples": [
              {
                "input": "list1 = [1,2,4], list2 = [1,3,4]",
                "output": "[1,1,2,3,4,4]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 50"
            ],
            "approach": "Dummy node with two pointer comparisons.",
            "complexity": "Time: O(N + M), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = tail = ListNode(0)\n        while list1 and list2:\n            if list1.val <= list2.val: tail.next = list1; list1 = list1.next\n            else: tail.next = list2; list2 = list2.next\n            tail = tail.next\n        tail.next = list1 or list2\n        return dummy.next",
              "java": "class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        ListNode dummy = new ListNode(0), tail = dummy;\n        while (list1 != null && list2 != null) {\n            if (list1.val <= list2.val) { tail.next = list1; list1 = list1.next; }\n            else { tail.next = list2; list2 = list2.next; }\n            tail = tail.next;\n        }\n        tail.next = (list1 != null) ? list1 : list2;\n        return dummy.next;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        ListNode dummy(0), *tail = &dummy;\n        while (list1 && list2) {\n            if (list1->val <= list2->val) { tail->next = list1; list1 = list1->next; }\n            else { tail->next = list2; list2 = list2->next; }\n            tail = tail->next;\n        }\n        tail->next = list1 ? list1 : list2;\n        return dummy.next;\n    }\n};"
            }
          },
          {
            "id": "q-merge-k-sorted-lists",
            "title": "Merge k Sorted Lists",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/merge-k-sorted-lists/",
            "statement": "Merge k sorted linked lists into one sorted linked list.",
            "examples": [
              {
                "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
                "output": "[1,1,2,3,4,4,5,6]"
              }
            ],
            "constraints": [
              "0 <= k <= 10^4"
            ],
            "approach": "Min-heap / Priority Queue storing head of each non-empty list.",
            "complexity": "Time: O(N log k), Space: O(k)",
            "code": {
              "python": "class Solution:\n    def mergeKLists(self, lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n        import heapq\n        heap = []\n        for i, l in enumerate(lists):\n            if l: heapq.heappush(heap, (l.val, i, l))\n        dummy = tail = ListNode(0)\n        while heap:\n            val, i, node = heapq.heappop(heap)\n            tail.next = node; tail = tail.next\n            if node.next: heapq.heappush(heap, (node.next.val, i, node.next))\n        return dummy.next",
              "java": "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));\n        for (ListNode l : lists) if (l != null) pq.add(l);\n        ListNode dummy = new ListNode(0), tail = dummy;\n        while (!pq.isEmpty()) {\n            ListNode node = pq.poll();\n            tail.next = node; tail = tail.next;\n            if (node.next != null) pq.add(node.next);\n        }\n        return dummy.next;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };\n        priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);\n        for (auto l : lists) if (l) pq.push(l);\n        ListNode dummy(0), *tail = &dummy;\n        while (!pq.empty()) {\n            ListNode* node = pq.top(); pq.pop();\n            tail->next = node; tail = tail->next;\n            if (node->next) pq.push(node->next);\n        }\n        return dummy.next;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-linked-list-manipulation",
        "name": "Two Pointer Gaps & Reordering",
        "subtitle": "Nth From End & Reorder",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Uses two pointers separated by a fixed offset of N nodes.",
        "when_to_use": "Removing Nth node from end, reordering list (1st, Nth, 2nd, N-1th...).",
        "how_to_identify": "Nth node from end, interleaving list halves.",
        "intuition": "Advance fast pointer N steps ahead. Then move fast and slow together until fast reaches end.",
        "step_by_step": [
          "Advance fast N steps",
          "Move fast and slow together until fast.next is null",
          "Remove slow.next node"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def removeNthFromEnd(head, n):\n    dummy = ListNode(0, head)\n    fast = slow = dummy\n    for _ in range(n + 1): fast = fast.next\n    while fast:\n        fast = fast.next; slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next",
          "java": "public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) {\n        fast = fast.next; slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
          "cpp": "ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0, head);\n    ListNode *fast = &dummy, *slow = &dummy;\n    for (int i = 0; i <= n; i++) fast = fast->next;\n    while (fast) {\n        fast = fast->next; slow = slow->next;\n    }\n    slow->next = slow->next->next;\n    return dummy.next;\n}"
        },
        "questions": [
          {
            "id": "q-remove-nth-node-from-end",
            "title": "Remove Nth Node From End of List",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            "statement": "Remove the nth node from the end of the list and return its head.",
            "examples": [
              {
                "input": "head = [1,2,3,4,5], n = 2",
                "output": "[1,2,3,5]"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 30"
            ],
            "approach": "Two pointers with gap of n.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        dummy = ListNode(0, head)\n        fast = slow = dummy\n        for _ in range(n + 1): fast = fast.next\n        while fast:\n            fast = fast.next; slow = slow.next\n        slow.next = slow.next.next\n        return dummy.next",
              "java": "class Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        ListNode dummy = new ListNode(0, head);\n        ListNode fast = dummy, slow = dummy;\n        for (int i = 0; i <= n; i++) fast = fast.next;\n        while (fast != null) {\n            fast = fast.next; slow = slow.next;\n        }\n        slow.next = slow.next.next;\n        return dummy.next;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        ListNode dummy(0, head);\n        ListNode *fast = &dummy, *slow = &dummy;\n        for (int i = 0; i <= n; i++) fast = fast->next;\n        while (fast) {\n            fast = fast->next; slow = slow->next;\n        }\n        slow->next = slow->next->next;\n        return dummy.next;\n    }\n};"
            }
          },
          {
            "id": "q-reorder-list",
            "title": "Reorder List",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/reorder-list/",
            "statement": "Reorder list to be: L0 \u2192 Ln \u2192 L1 \u2192 Ln-1 \u2192 L2 \u2192 Ln-2...",
            "examples": [
              {
                "input": "head = [1,2,3,4]",
                "output": "[1,4,2,3]"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 5 * 10^4"
            ],
            "approach": "Find middle, reverse second half, merge two halves alternately.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n        prev, curr = None, slow.next\n        slow.next = None\n        while curr:\n            nxt = curr.next; curr.next = prev; prev = curr; curr = nxt\n        first, second = head, prev\n        while second:\n            tmp1, tmp2 = first.next, second.next\n            first.next = second; second.next = tmp1\n            first, second = tmp1, tmp2",
              "java": "class Solution {\n    public void reorderList(ListNode head) {\n        if (head == null || head.next == null) return;\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n        }\n        ListNode prev = null, curr = slow.next;\n        slow.next = null;\n        while (curr != null) {\n            ListNode nxt = curr.next; curr.next = prev; prev = curr; curr = nxt;\n        }\n        ListNode first = head, second = prev;\n        while (second != null) {\n            ListNode tmp1 = first.next, tmp2 = second.next;\n            first.next = second; second.next = tmp1;\n            first = tmp1; second = tmp2;\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    void reorderList(ListNode* head) {\n        if (!head || !head->next) return;\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) { slow = slow->next; fast = fast->next->next; }\n        ListNode *prev = NULL, *curr = slow->next;\n        slow->next = NULL;\n        while (curr) { ListNode *nxt = curr->next; curr->next = prev; prev = curr; curr = nxt; }\n        ListNode *first = head, *second = prev;\n        while (second) {\n            ListNode *tmp1 = first->next, *tmp2 = second->next;\n            first->next = second; second->next = tmp1;\n            first = tmp1; second = tmp2;\n        }\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-stack",
    "name": "Stack",
    "description": "Master Last-In-First-Out (LIFO) stack evaluation, parenthesis matching, monotonic stacks, and expression evaluation.",
    "icon": "Layers",
    "total_patterns": 4,
    "total_problems": 8,
    "patterns": [
      {
        "id": "pattern-parentheses-matching",
        "name": "Parentheses Matching",
        "subtitle": "LIFO Validation",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Uses stack to match opening brackets with corresponding closing brackets.",
        "when_to_use": "Validating matching brackets '()', '{}', '[]', minimum additions to make parentheses valid.",
        "how_to_identify": "Balanced parentheses, bracket matching, nested structures.",
        "intuition": "Push opening brackets onto stack; on closing bracket, check if top of stack matches.",
        "step_by_step": [
          "Iterate through characters",
          "If opening bracket, push to stack",
          "If closing bracket, pop and verify match",
          "Check if stack is empty at end"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def isValid(s: str) -> bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top: return False\n        else: stack.append(char)\n    return not stack",
          "java": "public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}",
          "cpp": "bool isValid(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(') st.push(')');\n        else if (c == '{') st.push('}');\n        else if (c == '[') st.push(']');\n        else {\n            if (st.empty() || st.top() != c) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}"
        },
        "questions": [
          {
            "id": "q-valid-parentheses",
            "title": "Valid Parentheses",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/valid-parentheses/",
            "statement": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            "examples": [
              {
                "input": "s = \"()[]{}\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length <= 10^4"
            ],
            "approach": "Push closing bracket target onto stack when opening bracket is encountered.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        st = []\n        mp = {')':'(', '}':'{', ']':'['}\n        for c in s:\n            if c in mp:\n                if not st or st.pop() != mp[c]: return False\n            else: st.append(c)\n        return not st",
              "java": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> st = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') st.push(')');\n            else if (c == '{') st.push('}');\n            else if (c == '[') st.push(']');\n            else if (st.isEmpty() || st.pop() != c) return false;\n        }\n        return st.isEmpty();\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n        for (char c : s) {\n            if (c == '(') st.push(')');\n            else if (c == '{') st.push('}');\n            else if (c == '[') st.push(']');\n            else { if (st.empty() || st.top() != c) return false; st.pop(); }\n        }\n        return st.empty();\n    }\n};"
            }
          },
          {
            "id": "q-min-add-parentheses-valid",
            "title": "Minimum Add to Make Parentheses Valid",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
            "statement": "Return the minimum number of parentheses we must add to make the resulting string valid.",
            "examples": [
              {
                "input": "s = \"())\"",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= s.length <= 1000"
            ],
            "approach": "Track open count and needed count without full stack.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def minAddToMakeValid(self, s: str) -> int:\n        open_c = need = 0\n        for c in s:\n            if c == '(': open_c += 1\n            elif open_c > 0: open_c -= 1\n            else: need += 1\n        return open_c + need",
              "java": "class Solution {\n    public int minAddToMakeValid(String s) {\n        int openC = 0, need = 0;\n        for (char c : s.toCharArray()) {\n            if (c == '(') openC++;\n            else if (openC > 0) openC--;\n            else need++;\n        }\n        return openC + need;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minAddToMakeValid(string s) {\n        int openC = 0, need = 0;\n        for (char c : s) {\n            if (c == '(') openC++;\n            else if (openC > 0) openC--;\n            else need++;\n        }\n        return openC + need;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-monotonic-stack",
        "name": "Monotonic Stack",
        "subtitle": "Next Greater / Smaller Element",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 3,
        "what": "Maintains elements in strictly increasing or decreasing order inside stack.",
        "when_to_use": "Next Greater Element, Daily Temperatures, Online Stock Span, Largest Rectangle in Histogram.",
        "how_to_identify": "Next greater element, next smaller element, daily temperature span.",
        "intuition": "Pop elements from stack while current element violates monotonicity. The popped elements found their next greater/smaller target.",
        "step_by_step": [
          "Iterate through array",
          "While stack is non-empty and current element > top element, pop and record result",
          "Push current index/element"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def dailyTemperatures(temperatures):\n    res = [0] * len(temperatures)\n    stack = [] # (index, temp)\n    for i, t in enumerate(temperatures):\n        while stack and t > stack[-1][1]:\n            idx, _ = stack.pop()\n            res[idx] = i - idx\n        stack.append((i, t))\n    return res",
          "java": "public int[] dailyTemperatures(int[] temperatures) {\n    int[] res = new int[temperatures.length];\n    Stack<Integer> stack = new Stack<>();\n    for (int i = 0; i < temperatures.length; i++) {\n        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n            int idx = stack.pop();\n            res[idx] = i - idx;\n        }\n        stack.push(i);\n    }\n    return res;\n}",
          "cpp": "vector<int> dailyTemperatures(vector<int>& temperatures) {\n    vector<int> res(temperatures.size(), 0);\n    stack<int> st;\n    for (int i = 0; i < temperatures.size(); i++) {\n        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {\n            int idx = st.top(); st.pop();\n            res[idx] = i - idx;\n        }\n        st.push(i);\n    }\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-next-greater-element-i",
            "title": "Next Greater Element I",
            "difficulty": "Easy",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/next-greater-element-i/",
            "statement": "Find next greater element for each value in nums1 present in nums2.",
            "examples": [
              {
                "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]",
                "output": "[-1,3,-1]"
              }
            ],
            "constraints": [
              "1 <= nums1.length <= nums2.length <= 1000"
            ],
            "approach": "Monotonic decreasing stack on nums2 mapped in hashmap.",
            "complexity": "Time: O(N + M), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def nextGreaterElement(self, nums1: list[int], nums2: list[int]) -> list[int]:\n        mp = {}; st = []\n        for x in nums2:\n            while st and x > st[-1]: mp[st.pop()] = x\n            st.append(x)\n        return [mp.get(x, -1) for x in nums1]",
              "java": "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        Map<Integer, Integer> map = new HashMap<>();\n        Stack<Integer> st = new Stack<>();\n        for (int x : nums2) {\n            while (!st.isEmpty() && x > st.peek()) map.put(st.pop(), x);\n            st.push(x);\n        }\n        int[] res = new int[nums1.length];\n        for (int i = 0; i < nums1.length; i++) res[i] = map.getOrDefault(nums1[i], -1);\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n        unordered_map<int, int> mp;\n        stack<int> st;\n        for (int x : nums2) {\n            while (!st.empty() && x > st.top()) { mp[st.top()] = x; st.pop(); }\n            st.push(x);\n        }\n        vector<int> res;\n        for (int x : nums1) res.push_back(mp.count(x) ? mp[x] : -1);\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-daily-temperatures",
            "title": "Daily Temperatures",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/daily-temperatures/",
            "statement": "Return array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
            "examples": [
              {
                "input": "temperatures = [73,74,75,71,69,72,76,73]",
                "output": "[1,1,4,2,1,1,0,0]"
              }
            ],
            "constraints": [
              "1 <= temperatures.length <= 10^5"
            ],
            "approach": "Monotonic stack storing index of temperatures.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:\n        res = [0] * len(temperatures); st = []\n        for i, t in enumerate(temperatures):\n            while st and t > temperatures[st[-1]]:\n                idx = st.pop(); res[idx] = i - idx\n            st.append(i)\n        return res",
              "java": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        int[] res = new int[temperatures.length];\n        Stack<Integer> st = new Stack<>();\n        for (int i = 0; i < temperatures.length; i++) {\n            while (!st.isEmpty() && temperatures[i] > temperatures[st.peek()]) {\n                int idx = st.pop(); res[idx] = i - idx;\n            }\n            st.push(i);\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        vector<int> res(temperatures.size(), 0);\n        stack<int> st;\n        for (int i = 0; i < temperatures.size(); i++) {\n            while (!st.empty() && temperatures[i] > temperatures[st.top()]) {\n                int idx = st.top(); st.pop(); res[idx] = i - idx;\n            }\n            st.push(i);\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-online-stock-span",
            "title": "Online Stock Span",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/online-stock-span/",
            "statement": "Design a class StockSpanner to calculate the span of stock price for current day.",
            "examples": [
              {
                "input": "next(100), next(80), next(60), next(70), next(60), next(75), next(85)",
                "output": "1, 1, 1, 2, 1, 4, 6"
              }
            ],
            "constraints": [
              "1 <= price <= 10^5"
            ],
            "approach": "Monotonic stack storing pair (price, span). Pop while current price >= stack top price, accumulating span.",
            "complexity": "Time: O(1) amortized, Space: O(N)",
            "code": {
              "python": "class StockSpanner:\n    def __init__(self):\n        self.st = []\n    def next(self, price: int) -> int:\n        span = 1\n        while self.st and self.st[-1][0] <= price:\n            span += self.st.pop()[1]\n        self.st.append((price, span))\n        return span",
              "java": "class StockSpanner {\n    Stack<int[]> st = new Stack<>();\n    public int next(int price) {\n        int span = 1;\n        while (!st.isEmpty() && st.peek()[0] <= price) {\n            span += st.pop()[1];\n        }\n        st.push(new int[]{price, span});\n        return span;\n    }\n}",
              "cpp": "class StockSpanner {\n    stack<pair<int, int>> st;\npublic:\n    int next(int price) {\n        int span = 1;\n        while (!st.empty() && st.top().first <= price) {\n            span += st.top().second; st.pop();\n        }\n        st.push({price, span});\n        return span;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-expression-evaluation",
        "name": "Expression Evaluation",
        "subtitle": "Operator Precedence & RPN",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Evaluates arithmetic expression tokens using operator precedence and operand stacks.",
        "when_to_use": "Evaluating Reverse Polish Notation (Postfix), Basic Calculator II.",
        "how_to_identify": "Reverse Polish Notation, arithmetic string evaluation.",
        "intuition": "Push numbers onto stack. On operator, pop operands, compute result, and push result back.",
        "step_by_step": [
          "Iterate through tokens",
          "If number, push to stack",
          "If operator, pop two operands, evaluate result, push result"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def evalRPN(tokens):\n    stack = []\n    for t in tokens:\n        if t in '+-*/':\n            b, a = stack.pop(), stack.pop()\n            if t == '+': stack.append(a + b)\n            elif t == '-': stack.append(a - b)\n            elif t == '*': stack.append(a * b)\n            else: stack.append(int(a / b))\n        else: stack.append(int(t))\n    return stack[0]",
          "java": "public int evalRPN(String[] tokens) {\n    Stack<Integer> stack = new Stack<>();\n    for (String t : tokens) {\n        if (t.equals(\"+\") || t.equals(\"-\") || t.equals(\"*\") || t.equals(\"/\")) {\n            int b = stack.pop(), a = stack.pop();\n            if (t.equals(\"+\")) stack.push(a + b);\n            else if (t.equals(\"-\")) stack.push(a - b);\n            else if (t.equals(\"*\")) stack.push(a * b);\n            else stack.push(a / b);\n        } else stack.push(Integer.parseInt(t));\n    }\n    return stack.pop();\n}",
          "cpp": "int evalRPN(vector<string>& tokens) {\n    stack<long long> st;\n    for (string& t : tokens) {\n        if (t == \"+\" || t == \"-\" || t == \"*\" || t == \"/\") {\n            long long b = st.top(); st.pop();\n            long long a = st.top(); st.pop();\n            if (t == \"+\") st.push(a + b);\n            else if (t == \"-\") st.push(a - b);\n            else if (t == \"*\") st.push(a * b);\n            else st.push(a / b);\n        } else st.push(stoll(t));\n    }\n    return st.top();\n}"
        },
        "questions": [
          {
            "id": "q-eval-rpn",
            "title": "Evaluate Reverse Polish Notation",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
            "statement": "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
            "examples": [
              {
                "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
                "output": "9"
              }
            ],
            "constraints": [
              "1 <= tokens.length <= 10^4"
            ],
            "approach": "Stack popping two operands for each operator.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        st = []\n        for t in tokens:\n            if t in '+-*/':\n                b, a = st.pop(), st.pop()\n                if t == '+': st.append(a + b)\n                elif t == '-': st.append(a - b)\n                elif t == '*': st.append(a * b)\n                else: st.append(int(a / b))\n            else: st.append(int(t))\n        return st[0]",
              "java": "class Solution {\n    public int evalRPN(String[] tokens) {\n        Stack<Integer> st = new Stack<>();\n        for (String t : tokens) {\n            if (t.equals(\"+\") || t.equals(\"-\") || t.equals(\"*\") || t.equals(\"/\")) {\n                int b = st.pop(), a = st.pop();\n                if (t.equals(\"+\")) st.push(a + b);\n                else if (t.equals(\"-\")) st.push(a - b);\n                else if (t.equals(\"*\")) st.push(a * b);\n                else st.push(a / b);\n            } else st.push(Integer.parseInt(t));\n        }\n        return st.pop();\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        stack<long long> st;\n        for (string& t : tokens) {\n            if (t == \"+\" || t == \"-\" || t == \"*\" || t == \"/\") {\n                long long b = st.top(); st.pop();\n                long long a = st.top(); st.pop();\n                if (t == \"+\") st.push(a + b);\n                else if (t == \"-\") st.push(a - b);\n                else if (t == \"*\") st.push(a * b);\n                else st.push(a / b);\n            } else st.push(stoll(t));\n        }\n        return st.top();\n    }\n};"
            }
          },
          {
            "id": "q-basic-calculator-ii",
            "title": "Basic Calculator II",
            "difficulty": "Medium",
            "estimated_minutes": 22,
            "leetcode_url": "https://leetcode.com/problems/basic-calculator-ii/",
            "statement": "Given a string s which represents an expression, evaluate this expression.",
            "examples": [
              {
                "input": "s = \"3+2*2\"",
                "output": "7"
              }
            ],
            "constraints": [
              "1 <= s.length <= 3 * 10^5"
            ],
            "approach": "Track current number and last sign. Push numbers to stack (+ / -) or multiply/divide immediately for * and /.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def calculate(self, s: str) -> int:\n        st, num, sign = [], 0, '+'\n        for i, c in enumerate(s):\n            if c.isdigit(): num = num * 10 + int(c)\n            if (not c.isdigit() and c != ' ') or i == len(s) - 1:\n                if sign == '+': st.append(num)\n                elif sign == '-': st.append(-num)\n                elif sign == '*': st.append(st.pop() * num)\n                elif sign == '/': st.append(int(st.pop() / num))\n                sign = c; num = 0\n        return sum(st)",
              "java": "class Solution {\n    public int calculate(String s) {\n        Stack<Integer> st = new Stack<>();\n        int num = 0; char sign = '+';\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) num = num * 10 + (c - '0');\n            if ((!Character.isDigit(c) && c != ' ') || i == s.length() - 1) {\n                if (sign == '+') st.push(num);\n                else if (sign == '-') st.push(-num);\n                else if (sign == '*') st.push(st.pop() * num);\n                else if (sign == '/') st.push(st.pop() / num);\n                sign = c; num = 0;\n            }\n        }\n        int sum = 0; for (int x : st) sum += x;\n        return sum;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int calculate(string s) {\n        stack<int> st;\n        long long num = 0; char sign = '+';\n        for (int i = 0; i < s.length(); i++) {\n            char c = s[i];\n            if (isdigit(c)) num = num * 10 + (c - '0');\n            if ((!isdigit(c) && c != ' ') || i == s.length() - 1) {\n                if (sign == '+') st.push(num);\n                else if (sign == '-') st.push(-num);\n                else if (sign == '*') { int top = st.top(); st.pop(); st.push(top * num); }\n                else if (sign == '/') { int top = st.top(); st.pop(); st.push(top / num); }\n                sign = c; num = 0;\n            }\n        }\n        int sum = 0;\n        while (!st.empty()) { sum += st.top(); st.pop(); }\n        return sum;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-stack-simulation",
        "name": "Stack Simulation",
        "subtitle": "O(1) Min Stack",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Maintains auxiliary stack or tuple state to retrieve minimum element in O(1) constant time.",
        "when_to_use": "Min Stack design, browser history simulation.",
        "how_to_identify": "Min stack, retrieve minimum element in constant time.",
        "intuition": "Store min element alongside each pushed element in stack.",
        "step_by_step": [
          "Push (val, min_so_far) to stack",
          "pop() pops top",
          "top() retrieves val",
          "getMin() retrieves min_so_far"
        ],
        "time_complexity": "O(1)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "class MinStack:\n    def __init__(self):\n        self.st = []\n    def push(self, val: int) -> None:\n        m = min(val, self.st[-1][1]) if self.st else val\n        self.st.append((val, m))\n    def pop(self) -> None:\n        self.st.pop()\n    def top(self) -> int:\n        return self.st[-1][0]\n    def getMin(self) -> int:\n        return self.st[-1][1]",
          "java": "class MinStack {\n    Stack<int[]> st = new Stack<>();\n    public void push(int val) {\n        int min = st.isEmpty() ? val : Math.min(val, st.peek()[1]);\n        st.push(new int[]{val, min});\n    }\n    public void pop() { st.pop(); }\n    public int top() { return st.peek()[0]; }\n    public int getMin() { return st.peek()[1]; }\n}",
          "cpp": "class MinStack {\n    stack<pair<int, int>> st;\npublic:\n    void push(int val) {\n        int m = st.empty() ? val : min(val, st.top().second);\n        st.push({val, m});\n    }\n    void pop() { st.pop(); }\n    int top() { return st.top().first; }\n    int getMin() { return st.top().second; }\n};"
        },
        "questions": [
          {
            "id": "q-min-stack",
            "title": "Min Stack",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/min-stack/",
            "statement": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
            "examples": [
              {
                "input": "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",
                "output": "-3, 0, -2"
              }
            ],
            "constraints": [
              "-2^31 <= val <= 2^31 - 1"
            ],
            "approach": "Stack of pairs (val, current_min).",
            "complexity": "Time: O(1) for all ops, Space: O(N)",
            "code": {
              "python": "class MinStack:\n    def __init__(self):\n        self.st = []\n    def push(self, val: int) -> None:\n        m = min(val, self.st[-1][1]) if self.st else val\n        self.st.append((val, m))\n    def pop(self) -> None:\n        self.st.pop()\n    def top(self) -> int:\n        return self.st[-1][0]\n    def getMin(self) -> int:\n        return self.st[-1][1]",
              "java": "class MinStack {\n    Stack<int[]> st = new Stack<>();\n    public void push(int val) {\n        int min = st.isEmpty() ? val : Math.min(val, st.peek()[1]);\n        st.push(new int[]{val, min});\n    }\n    public void pop() { st.pop(); }\n    public int top() { return st.peek()[0]; }\n    public int getMin() { return st.peek()[1]; }\n}",
              "cpp": "class MinStack {\n    stack<pair<int, int>> st;\npublic:\n    void push(int val) {\n        int m = st.empty() ? val : min(val, st.top().second);\n        st.push({val, m});\n    }\n    void pop() { st.pop(); }\n    int top() { return st.top().first; }\n    int getMin() { return st.top().second; }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-queue",
    "name": "Queue",
    "description": "Master First-In-First-Out (FIFO) queue evaluation, level-order traversals, double-ended queues (deque), and circular buffers.",
    "icon": "Clock",
    "total_patterns": 4,
    "total_problems": 6,
    "patterns": [
      {
        "id": "pattern-bfs-queue",
        "name": "BFS Queue",
        "subtitle": "Level-Order Processing",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Uses FIFO queue to process elements level by level in trees or grid graphs.",
        "when_to_use": "Binary tree level order traversal, shortest path in unweighted grid graphs, rotting oranges.",
        "how_to_identify": "Level order, shortest path unweighted, multi-source BFS.",
        "intuition": "Nodes at distance K are processed before any nodes at distance K + 1.",
        "step_by_step": [
          "Enqueue root/sources",
          "While queue is non-empty, record queue length L",
          "Process L items from queue, enqueuing children/neighbors"
        ],
        "time_complexity": "O(V + E)",
        "space_complexity": "O(V)",
        "code_snippets": {
          "python": "def levelOrder(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
          "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>(); q.add(root);\n    while (!q.isEmpty()) {\n        int size = q.size(); List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode node = q.poll(); level.add(node.val);\n            if (node.left != null) q.add(node.left);\n            if (node.right != null) q.add(node.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
          "cpp": "vector<vector<int>> levelOrder(TreeNode* root) {\n    vector<vector<int>> res;\n    if (!root) return res;\n    queue<TreeNode*> q; q.push(root);\n    while (!q.empty()) {\n        int size = q.size(); vector<int> level;\n        for (int i = 0; i < size; i++) {\n            TreeNode* node = q.front(); q.pop(); level.push_back(node->val);\n            if (node->left) q.push(node->left);\n            if (node->right) q.push(node->right);\n        }\n        res.push_back(level);\n    }\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-binary-tree-level-order",
            "title": "Binary Tree Level Order Traversal",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            "statement": "Given the root of a binary tree, return the level order traversal of its nodes' values.",
            "examples": [
              {
                "input": "root = [3,9,20,null,null,15,7]",
                "output": "[[3],[9,20],[15,7]]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 2000"
            ],
            "approach": "Queue level-by-level BFS traversal.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> list[list[int]]:\n        if not root: return []\n        res, q = [], deque([root])\n        while q:\n            lvl = []\n            for _ in range(len(q)):\n                n = q.popleft(); lvl.append(n.val)\n                if n.left: q.append(n.left)\n                if n.right: q.append(n.right)\n            res.append(lvl)\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>(); q.add(root);\n        while (!q.isEmpty()) {\n            int sz = q.size(); List<Integer> lvl = new ArrayList<>();\n            for (int i = 0; i < sz; i++) {\n                TreeNode n = q.poll(); lvl.add(n.val);\n                if (n.left != null) q.add(n.left);\n                if (n.right != null) q.add(n.right);\n            }\n            res.add(lvl);\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        vector<vector<int>> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root);\n        while (!q.empty()) {\n            int sz = q.size(); vector<int> lvl;\n            for (int i = 0; i < sz; i++) {\n                TreeNode* n = q.front(); q.pop(); lvl.push_back(n->val);\n                if (n->left) q.push(n->left);\n                if (n->right) q.push(n->right);\n            }\n            res.push_back(lvl);\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-rotting-oranges",
            "title": "Rotting Oranges",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/rotting-oranges/",
            "statement": "Return minimum number of minutes until no fresh orange remains. If impossible, return -1.",
            "examples": [
              {
                "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
                "output": "4"
              }
            ],
            "constraints": [
              "m == grid.length, n == grid[i].length"
            ],
            "approach": "Multi-source BFS from all initial rotten oranges (value 2).",
            "complexity": "Time: O(M * N), Space: O(M * N)",
            "code": {
              "python": "class Solution:\n    def orangesRotting(self, grid: list[list[int]]) -> int:\n        r, c = len(grid), len(grid[0]); q = deque(); fresh = 0\n        for i in range(r):\n            for j in range(c):\n                if grid[i][j] == 2: q.append((i, j))\n                elif grid[i][j] == 1: fresh += 1\n        if fresh == 0: return 0\n        mins = 0\n        dirs = [(0,1),(1,0),(0,-1),(-1,0)]\n        while q and fresh > 0:\n            mins += 1\n            for _ in range(len(q)):\n                x, y = q.popleft()\n                for dx, dy in dirs:\n                    nx, ny = x + dx, y + dy\n                    if 0 <= nx < r and 0 <= ny < c and grid[nx][ny] == 1:\n                        grid[nx][ny] = 2; fresh -= 1; q.append((nx, ny))\n        return mins if fresh == 0 else -1",
              "java": "class Solution {\n    public int orangesRotting(int[][] grid) {\n        int r = grid.length, c = grid[0].length, fresh = 0;\n        Queue<int[]> q = new LinkedList<>();\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == 2) q.add(new int[]{i, j});\n                else if (grid[i][j] == 1) fresh++;\n            }\n        }\n        if (fresh == 0) return 0;\n        int mins = 0, dirs[][] = {{0,1},{1,0},{0,-1},{-1,0}};\n        while (!q.isEmpty() && fresh > 0) {\n            mins++; int sz = q.size();\n            for (int i = 0; i < sz; i++) {\n                int[] curr = q.poll();\n                for (int[] d : dirs) {\n                    int nx = curr[0] + d[0], ny = curr[1] + d[1];\n                    if (nx >= 0 && nx < r && ny >= 0 && ny < c && grid[nx][ny] == 1) {\n                        grid[nx][ny] = 2; fresh--; q.add(new int[]{nx, ny});\n                    }\n                }\n            }\n        }\n        return fresh == 0 ? mins : -1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        int r = grid.size(), c = grid[0].size(), fresh = 0;\n        queue<pair<int,int>> q;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == 2) q.push({i, j});\n                else if (grid[i][j] == 1) fresh++;\n            }\n        }\n        if (fresh == 0) return 0;\n        int mins = 0, dirs[4][2] = {{0,1},{1,0},{0,-1},{-1,0}};\n        while (!q.empty() && fresh > 0) {\n            mins++; int sz = q.size();\n            for (int i = 0; i < sz; i++) {\n                auto [x, y] = q.front(); q.pop();\n                for (auto& d : dirs) {\n                    int nx = x + d[0], ny = y + d[1];\n                    if (nx >= 0 && nx < r && ny >= 0 && ny < c && grid[nx][ny] == 1) {\n                        grid[nx][ny] = 2; fresh--; q.push({nx, ny});\n                    }\n                }\n            }\n        }\n        return fresh == 0 ? mins : -1;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-deque-monotonic-queue",
        "name": "Deque / Monotonic Queue",
        "subtitle": "Sliding Window Maxima",
        "difficulty": "Hard",
        "total_problems": 2,
        "what": "Maintains monotonic decreasing deque of indices to query maximum in sliding window in O(1).",
        "when_to_use": "Sliding Window Maximum.",
        "how_to_identify": "Maximum in every sliding window of size K.",
        "intuition": "Pop elements from back of deque if current element >= deque back. Front of deque always holds index of max element in current window.",
        "step_by_step": [
          "Remove indices outside window [i-k+1, i]",
          "Remove indices from back whose values <= nums[i]",
          "Push index i",
          "If i >= k-1, append nums[deque.front] to result"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(K)",
        "code_snippets": {
          "python": "def maxSlidingWindow(nums, k):\n    q = deque(); res = []\n    for i, x in enumerate(nums):\n        while q and q[0] < i - k + 1: q.popleft()\n        while q and nums[q[-1]] <= x: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(nums[q[0]])\n    return res",
          "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    int n = nums.length; int[] res = new int[n - k + 1];\n    Deque<Integer> q = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) {\n        while (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();\n        while (!q.isEmpty() && nums[q.peekLast()] <= nums[i]) q.pollLast();\n        q.offerLast(i);\n        if (i >= k - 1) res[i - k + 1] = nums[q.peekFirst()];\n    }\n    return res;\n}",
          "cpp": "vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    deque<int> q; vector<int> res;\n    for (int i = 0; i < nums.size(); i++) {\n        while (!q.empty() && q.front() < i - k + 1) q.pop_front();\n        while (!q.empty() && nums[q.back()] <= nums[i]) q.pop_back();\n        q.push_back(i);\n        if (i >= k - 1) res.push_back(nums[q.front()]);\n    }\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-sliding-window-maximum",
            "title": "Sliding Window Maximum",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/sliding-window-maximum/",
            "statement": "Return max sliding window of size k for integer array nums.",
            "examples": [
              {
                "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
                "output": "[3,3,5,5,6,7]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Monotonic decreasing deque storing indices.",
            "complexity": "Time: O(N), Space: O(K)",
            "code": {
              "python": "class Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        q = deque(); res = []\n        for i, x in enumerate(nums):\n            while q and q[0] < i - k + 1: q.popleft()\n            while q and nums[q[-1]] <= x: q.pop()\n            q.append(i)\n            if i >= k - 1: res.append(nums[q[0]])\n        return res",
              "java": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        int n = nums.length; int[] res = new int[n - k + 1];\n        Deque<Integer> q = new ArrayDeque<>();\n        for (int i = 0; i < n; i++) {\n            while (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();\n            while (!q.isEmpty() && nums[q.peekLast()] <= nums[i]) q.pollLast();\n            q.offerLast(i);\n            if (i >= k - 1) res[i - k + 1] = nums[q.peekFirst()];\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        deque<int> q; vector<int> res;\n        for (int i = 0; i < nums.size(); i++) {\n            while (!q.empty() && q.front() < i - k + 1) q.pop_front();\n            while (!q.empty() && nums[q.back()] <= nums[i]) q.pop_back();\n            q.push_back(i);\n            if (i >= k - 1) res.push_back(nums[q.front()]);\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-design-circular-deque",
            "title": "Design Circular Deque",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/design-circular-deque/",
            "statement": "Design your implementation of the circular double-ended queue (deque).",
            "examples": [
              {
                "input": "insertLast(1), insertLast(2), insertFront(3), getFront()",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= k <= 1000"
            ],
            "approach": "Array implementation with head and tail modular pointers.",
            "complexity": "Time: O(1) all ops, Space: O(K)",
            "code": {
              "python": "class MyCircularDeque:\n    def __init__(self, k: int):\n        self.q = [0] * k; self.head = 0; self.tail = 0; self.size = 0; self.k = k\n    def insertFront(self, value: int) -> bool:\n        if self.isFull(): return False\n        self.head = (self.head - 1 + self.k) % self.k\n        self.q[self.head] = value; self.size += 1; return True\n    def insertLast(self, value: int) -> bool:\n        if self.isFull(): return False\n        self.q[self.tail] = value\n        self.tail = (self.tail + 1) % self.k; self.size += 1; return True\n    def deleteFront(self) -> bool:\n        if self.isEmpty(): return False\n        self.head = (self.head + 1) % self.k; self.size -= 1; return True\n    def deleteLast(self) -> bool:\n        if self.isEmpty(): return False\n        self.tail = (self.tail - 1 + self.k) % self.k; self.size -= 1; return True\n    def getFront(self) -> int:\n        return -1 if self.isEmpty() else self.q[self.head]\n    def getRear(self) -> int:\n        return -1 if self.isEmpty() else self.q[(self.tail - 1 + self.k) % self.k]\n    def isEmpty(self) -> bool: return self.size == 0\n    def isFull(self) -> bool: return self.size == self.k",
              "java": "class MyCircularDeque {\n    int[] q; int head = 0, tail = 0, size = 0, k;\n    public MyCircularDeque(int k) { this.k = k; q = new int[k]; }\n    public boolean insertFront(int value) {\n        if (isFull()) return false;\n        head = (head - 1 + k) % k; q[head] = value; size++; return true;\n    }\n    public boolean insertLast(int value) {\n        if (isFull()) return false;\n        q[tail] = value; tail = (tail + 1) % k; size++; return true;\n    }\n    public boolean deleteFront() {\n        if (isEmpty()) return false;\n        head = (head + 1) % k; size--; return true;\n    }\n    public boolean deleteLast() {\n        if (isEmpty()) return false;\n        tail = (tail - 1 + k) % k; size--; return true;\n    }\n    public int getFront() { return isEmpty() ? -1 : q[head]; }\n    public int getRear() { return isEmpty() ? -1 : q[(tail - 1 + k) % k]; }\n    public boolean isEmpty() { return size == 0; }\n    public boolean isFull() { return size == k; }\n}",
              "cpp": "class MyCircularDeque {\n    vector<int> q; int head = 0, tail = 0, size = 0, k;\npublic:\n    MyCircularDeque(int k) : k(k), q(k) {}\n    bool insertFront(int value) {\n        if (isFull()) return false;\n        head = (head - 1 + k) % k; q[head] = value; size++; return true;\n    }\n    bool insertLast(int value) {\n        if (isFull()) return false;\n        q[tail] = value; tail = (tail + 1) % k; size++; return true;\n    }\n    bool deleteFront() {\n        if (isEmpty()) return false;\n        head = (head + 1) % k; size--; return true;\n    }\n    bool deleteLast() {\n        if (isEmpty()) return false;\n        tail = (tail - 1 + k) % k; size--; return true;\n    }\n    int getFront() { return isEmpty() ? -1 : q[head]; }\n    int getRear() { return isEmpty() ? -1 : q[(tail - 1 + k) % k]; }\n    bool isEmpty() { return size == 0; }\n    bool isFull() { return size == k; }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-circular-queue",
        "name": "Circular Queue",
        "subtitle": "Fixed Buffer Reuse",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Uses fixed-size array with modular arithmetic to implement FIFO buffer without shifting elements.",
        "when_to_use": "Design Circular Queue.",
        "how_to_identify": "Circular queue implementation.",
        "intuition": "Head and tail wrap around using modulo operator % capacity.",
        "step_by_step": [
          "enqueue: q[tail] = x, tail = (tail + 1) % capacity",
          "dequeue: head = (head + 1) % capacity"
        ],
        "time_complexity": "O(1)",
        "space_complexity": "O(K)",
        "code_snippets": {
          "python": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.q = [0]*k; self.h = 0; self.t = 0; self.size = 0; self.k = k\n    def enQueue(self, val: int) -> bool:\n        if self.isFull(): return False\n        self.q[self.t] = val; self.t = (self.t + 1) % self.k; self.size += 1; return True\n    def deQueue(self) -> bool:\n        if self.isEmpty(): return False\n        self.h = (self.h + 1) % self.k; self.size -= 1; return True\n    def Front(self) -> int: return -1 if self.isEmpty() else self.q[self.h]\n    def Rear(self) -> int: return -1 if self.isEmpty() else self.q[(self.t - 1 + self.k) % self.k]\n    def isEmpty(self) -> bool: return self.size == 0\n    def isFull(self) -> bool: return self.size == self.k",
          "java": "class MyCircularQueue {\n    int[] q; int h = 0, t = 0, size = 0, k;\n    public MyCircularQueue(int k) { this.k = k; q = new int[k]; }\n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        q[t] = value; t = (t + 1) % k; size++; return true;\n    }\n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        h = (h + 1) % k; size--; return true;\n    }\n    public int Front() { return isEmpty() ? -1 : q[h]; }\n    public int Rear() { return isEmpty() ? -1 : q[(t - 1 + k) % k]; }\n    public boolean isEmpty() { return size == 0; }\n    public boolean isFull() { return size == k; }\n}",
          "cpp": "class MyCircularQueue {\n    vector<int> q; int h = 0, t = 0, size = 0, k;\npublic:\n    MyCircularQueue(int k) : k(k), q(k) {}\n    bool enQueue(int value) {\n        if (isFull()) return false;\n        q[t] = value; t = (t + 1) % k; size++; return true;\n    }\n    bool deQueue() {\n        if (isEmpty()) return false;\n        h = (h + 1) % k; size--; return true;\n    }\n    int Front() { return isEmpty() ? -1 : q[h]; }\n    int Rear() { return isEmpty() ? -1 : q[(t - 1 + k) % k]; }\n    bool isEmpty() { return size == 0; }\n    bool isFull() { return size == k; }\n};"
        },
        "questions": [
          {
            "id": "q-design-circular-queue",
            "title": "Design Circular Queue",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/design-circular-queue/",
            "statement": "Design your implementation of the circular queue.",
            "examples": [
              {
                "input": "enQueue(1), enQueue(2), enQueue(3), Front()",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= k <= 1000"
            ],
            "approach": "Array with head and tail pointers using modulo % k arithmetic.",
            "complexity": "Time: O(1) all ops, Space: O(K)",
            "code": {
              "python": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.q = [0]*k; self.h = 0; self.t = 0; self.size = 0; self.k = k\n    def enQueue(self, val: int) -> bool:\n        if self.isFull(): return False\n        self.q[self.t] = val; self.t = (self.t + 1) % self.k; self.size += 1; return True\n    def deQueue(self) -> bool:\n        if self.isEmpty(): return False\n        self.h = (self.h + 1) % self.k; self.size -= 1; return True\n    def Front(self) -> int: return -1 if self.isEmpty() else self.q[self.h]\n    def Rear(self) -> int: return -1 if self.isEmpty() else self.q[(self.t - 1 + self.k) % self.k]\n    def isEmpty(self) -> bool: return self.size == 0\n    def isFull(self) -> bool: return self.size == self.k",
              "java": "class MyCircularQueue {\n    int[] q; int h = 0, t = 0, size = 0, k;\n    public MyCircularQueue(int k) { this.k = k; q = new int[k]; }\n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        q[t] = value; t = (t + 1) % k; size++; return true;\n    }\n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        h = (h + 1) % k; size--; return true;\n    }\n    public int Front() { return isEmpty() ? -1 : q[h]; }\n    public int Rear() { return isEmpty() ? -1 : q[(t - 1 + k) % k]; }\n    public boolean isEmpty() { return size == 0; }\n    public boolean isFull() { return size == k; }\n}",
              "cpp": "class MyCircularQueue {\n    vector<int> q; int h = 0, t = 0, size = 0, k;\npublic:\n    MyCircularQueue(int k) : k(k), q(k) {}\n    bool enQueue(int value) {\n        if (isFull()) return false;\n        q[t] = value; t = (t + 1) % k; size++; return true;\n    }\n    bool deQueue() {\n        if (isEmpty()) return false;\n        h = (h + 1) % k; size--; return true;\n    }\n    int Front() { return isEmpty() ? -1 : q[h]; }\n    int Rear() { return isEmpty() ? -1 : q[(t - 1 + k) % k]; }\n    bool isEmpty() { return size == 0; }\n    bool isFull() { return size == k; }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-queue-simulation",
        "name": "Queue Simulation",
        "subtitle": "Stack using Queues",
        "difficulty": "Easy",
        "total_problems": 1,
        "what": "Simulates stack LIFO behavior using a single queue by rotating elements.",
        "when_to_use": "Implement Stack using Queues.",
        "how_to_identify": "Stack via Queue simulation.",
        "intuition": "On push, add element to queue and rotate previous N-1 elements to back of queue.",
        "step_by_step": [
          "q.append(x)",
          "For i in range(len(q) - 1): q.append(q.popleft())"
        ],
        "time_complexity": "O(N) push, O(1) pop",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "class MyStack:\n    def __init__(self):\n        self.q = deque()\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n    def pop(self) -> int: return self.q.popleft()\n    def top(self) -> int: return self.q[0]\n    def empty(self) -> bool: return not self.q",
          "java": "class MyStack {\n    Queue<Integer> q = new LinkedList<>();\n    public void push(int x) {\n        q.add(x);\n        for (int i = 0; i < q.size() - 1; i++) q.add(q.poll());\n    }\n    public int pop() { return q.poll(); }\n    public int top() { return q.peek(); }\n    public boolean empty() { return q.isEmpty(); }\n}",
          "cpp": "class MyStack {\n    queue<int> q;\npublic:\n    void push(int x) {\n        q.push(x);\n        for (int i = 0; i < (int)q.size() - 1; i++) { q.push(q.front()); q.pop(); }\n    }\n    int pop() { int val = q.front(); q.pop(); return val; }\n    int top() { return q.front(); }\n    bool empty() { return q.empty(); }\n};"
        },
        "questions": [
          {
            "id": "q-implement-stack-using-queues",
            "title": "Implement Stack using Queues",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/implement-stack-using-queues/",
            "statement": "Implement a last-in-first-out (LIFO) stack using only two queues.",
            "examples": [
              {
                "input": "push(1), push(2), top(), pop(), empty()",
                "output": "2, 2, false"
              }
            ],
            "constraints": [
              "1 <= x <= 9"
            ],
            "approach": "Single Queue rotation on push.",
            "complexity": "Time: O(N) push, O(1) pop, Space: O(N)",
            "code": {
              "python": "class MyStack:\n    def __init__(self):\n        self.q = deque()\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n    def pop(self) -> int: return self.q.popleft()\n    def top(self) -> int: return self.q[0]\n    def empty(self) -> bool: return not self.q",
              "java": "class MyStack {\n    Queue<Integer> q = new LinkedList<>();\n    public void push(int x) {\n        q.add(x);\n        for (int i = 0; i < q.size() - 1; i++) q.add(q.poll());\n    }\n    public int pop() { return q.poll(); }\n    public int top() { return q.peek(); }\n    public boolean empty() { return q.isEmpty(); }\n}",
              "cpp": "class MyStack {\n    queue<int> q;\npublic:\n    void push(int x) {\n        q.push(x);\n        for (int i = 0; i < (int)q.size() - 1; i++) { q.push(q.front()); q.pop(); }\n    }\n    int pop() { int val = q.front(); q.pop(); return val; }\n    int top() { return q.front(); }\n    bool empty() { return q.empty(); }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-hashing",
    "name": "Hashing",
    "description": "Master HashMaps, HashSets, frequency counting, complement lookups, and contiguous state hashing.",
    "icon": "Database",
    "total_patterns": 4,
    "total_problems": 8,
    "patterns": [
      {
        "id": "pattern-complement-hashing",
        "name": "Complement Lookup",
        "subtitle": "Hash Map Search",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Stores visited elements in a HashMap to achieve O(1) complement lookup.",
        "when_to_use": "Two Sum, 4Sum II.",
        "how_to_identify": "Find pair/triplet target sum in unsorted array.",
        "intuition": "For each x, target - x is calculated. Check if complement exists in HashMap.",
        "step_by_step": [
          "Initialize empty HashMap",
          "For element x in arr:",
          "if (target - x) in map: return indices",
          "map[x] = current_index"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    mp = {}\n    for i, x in enumerate(nums):\n        comp = target - x\n        if comp in mp: return [mp[comp], i]\n        mp[x] = i\n    return []",
          "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int comp = target - nums[i];\n        if (map.containsKey(comp)) return new int[]{map.get(comp), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}",
          "cpp": "vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> mp;\n    for (int i = 0; i < nums.size(); i++) {\n        int comp = target - nums[i];\n        if (mp.count(comp)) return {mp[comp], i};\n        mp[nums[i]] = i;\n    }\n    return {};\n}"
        },
        "questions": [
          {
            "id": "q-two-sum",
            "title": "Two Sum",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/two-sum/",
            "statement": "Return indices of two numbers that add up to target.",
            "examples": [
              {
                "input": "nums = [2,7,11,15], target = 9",
                "output": "[0,1]"
              }
            ],
            "constraints": [
              "2 <= nums.length <= 10^4"
            ],
            "approach": "HashMap storing number to index mapping.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        mp = {}\n        for i, x in enumerate(nums):\n            if target - x in mp: return [mp[target - x], i]\n            mp[x] = i\n        return []",
              "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            if (map.containsKey(target - nums[i])) return new int[]{map.get(target - nums[i]), i};\n            map.put(nums[i], i);\n        }\n        return new int[0];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> mp;\n        for (int i = 0; i < nums.size(); i++) {\n            if (mp.count(target - nums[i])) return {mp[target - nums[i]], i};\n            mp[nums[i]] = i;\n        }\n        return {};\n    }\n};"
            }
          },
          {
            "id": "q-4sum-ii",
            "title": "4Sum II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/4sum-ii/",
            "statement": "Return number of tuples (i, j, k, l) such that A[i] + B[j] + C[k] + D[l] == 0.",
            "examples": [
              {
                "input": "nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= n <= 500"
            ],
            "approach": "HashMap sum pairs of (nums1, nums2), then lookup -(u+v) in (nums3, nums4).",
            "complexity": "Time: O(N^2), Space: O(N^2)",
            "code": {
              "python": "class Solution:\n    def fourSumCount(self, nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:\n        mp = {}\n        for a in nums1:\n            for b in nums2: mp[a + b] = mp.get(a + b, 0) + 1\n        ans = 0\n        for c in nums3:\n            for d in nums4: ans += mp.get(-(c + d), 0)\n        return ans",
              "java": "class Solution {\n    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int a : nums1) for (int b : nums2) map.put(a + b, map.getOrDefault(a + b, 0) + 1);\n        int ans = 0;\n        for (int c : nums3) for (int d : nums4) ans += map.getOrDefault(-(c + d), 0);\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {\n        unordered_map<int, int> mp;\n        for (int a : nums1) for (int b : nums2) mp[a + b]++;\n        int ans = 0;\n        for (int c : nums3) for (int d : nums4) if (mp.count(-(c + d))) ans += mp[-(c + d)];\n        return ans;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-hash-set-duplicates",
        "name": "Hash Set & Unique Sequences",
        "subtitle": "Set Operations",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Stores unique values in a HashSet for O(1) membership testing.",
        "when_to_use": "Contains Duplicate, Longest Consecutive Sequence.",
        "how_to_identify": "Set membership testing, sequence building.",
        "intuition": "Only start counting sequence from num if (num - 1) is NOT in set (ensures O(N) total ops).",
        "step_by_step": [
          "Add all numbers to HashSet",
          "For num in set: if (num - 1) not in set: current = num, count sequence length"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def longestConsecutive(nums: list[int]) -> int:\n    num_set = set(nums); max_len = 0\n    for n in num_set:\n        if n - 1 not in num_set:\n            curr, length = n, 1\n            while curr + 1 in num_set:\n                curr += 1; length += 1\n            max_len = max(max_len, length)\n    return max_len",
          "java": "public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int n : nums) set.add(n);\n    int maxLen = 0;\n    for (int n : set) {\n        if (!set.contains(n - 1)) {\n            int curr = n, len = 1;\n            while (set.contains(curr + 1)) { curr++; len++; }\n            maxLen = Math.max(maxLen, len);\n        }\n    }\n    return maxLen;\n}",
          "cpp": "int longestConsecutive(vector<int>& nums) {\n    unordered_set<int> st(nums.begin(), nums.end());\n    int maxLen = 0;\n    for (int n : st) {\n        if (!st.count(n - 1)) {\n            int curr = n, len = 1;\n            while (st.count(curr + 1)) { curr++; len++; }\n            maxLen = max(maxLen, len);\n        }\n    }\n    return maxLen;\n}"
        },
        "questions": [
          {
            "id": "q-contains-duplicate",
            "title": "Contains Duplicate",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/contains-duplicate/",
            "statement": "Return true if any value appears at least twice in array.",
            "examples": [
              {
                "input": "nums = [1,2,3,1]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Insert into HashSet and check length vs array length.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        return len(nums) != len(set(nums))",
              "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int x : nums) if (!set.add(x)) return true;\n        return false;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        unordered_set<int> st;\n        for (int x : nums) if (!st.insert(x).second) return true;\n        return false;\n    }\n};"
            }
          },
          {
            "id": "q-longest-consecutive-sequence",
            "title": "Longest Consecutive Sequence",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/longest-consecutive-sequence/",
            "statement": "Find length of longest consecutive elements sequence in unsorted array.",
            "examples": [
              {
                "input": "nums = [100,4,200,1,3,2]",
                "output": "4"
              }
            ],
            "constraints": [
              "0 <= nums.length <= 10^5"
            ],
            "approach": "HashSet. Only expand sequence from numbers where num - 1 is missing.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def longestConsecutive(self, nums: list[int]) -> int:\n        s = set(nums); ans = 0\n        for x in s:\n            if x - 1 not in s:\n                curr = x; l = 1\n                while curr + 1 in s: curr += 1; l += 1\n                ans = max(ans, l)\n        return ans",
              "java": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int x : nums) set.add(x);\n        int ans = 0;\n        for (int x : set) {\n            if (!set.contains(x - 1)) {\n                int curr = x, l = 1;\n                while (set.contains(curr + 1)) { curr++; l++; }\n                ans = Math.max(ans, l);\n            }\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> st(nums.begin(), nums.end());\n        int ans = 0;\n        for (int x : st) {\n            if (!st.count(x - 1)) {\n                int curr = x, l = 1;\n                while (st.count(curr + 1)) { curr++; l++; }\n                ans = max(ans, l);\n            }\n        }\n        return ans;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-prefix-state-hashing",
        "name": "Prefix State Hashing",
        "subtitle": "Prefix Sum HashMap",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Stores running prefix states (e.g. prefix sum, parity count) in a HashMap.",
        "when_to_use": "Subarray Sum Equals K, Contiguous Array.",
        "how_to_identify": "Count subarrays satisfying sum/parity conditions.",
        "intuition": "If prefix_sum[R] - prefix_sum[L] == K, then prefix_sum[L] == prefix_sum[R] - K. Store frequency of prefix_sums.",
        "step_by_step": [
          "Initialize HashMap with {0: 1}",
          "curr_sum = 0, count = 0",
          "for x in nums: curr_sum += x, count += map[curr_sum - k], map[curr_sum]++"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def subarraySum(nums: list[int], k: int) -> int:\n    mp = {0: 1}; curr = ans = 0\n    for x in nums:\n        curr += x; ans += mp.get(curr - k, 0); mp[curr] = mp.get(curr, 0) + 1\n    return ans",
          "java": "public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>(); map.put(0, 1);\n    int curr = 0, ans = 0;\n    for (int x : nums) {\n        curr += x; ans += map.getOrDefault(curr - k, 0); map.put(curr, map.getOrDefault(curr, 0) + 1);\n    }\n    return ans;\n}",
          "cpp": "int subarraySum(vector<int>& nums, int k) {\n    unordered_map<int, int> mp; mp[0] = 1;\n    int curr = 0, ans = 0;\n    for (int x : nums) {\n        curr += x; ans += mp[curr - k]; mp[curr]++;\n    }\n    return ans;\n}"
        },
        "questions": [
          {
            "id": "q-contiguous-array",
            "title": "Contiguous Array",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/contiguous-array/",
            "statement": "Find maximum length of a contiguous subarray with equal number of 0s and 1s.",
            "examples": [
              {
                "input": "nums = [0,1,0]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^5"
            ],
            "approach": "Treat 0 as -1. Find longest subarray with prefix sum 0.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def findMaxLength(self, nums: list[int]) -> int:\n        mp = {0: -1}; curr = ans = 0\n        for i, x in enumerate(nums):\n            curr += 1 if x == 1 else -1\n            if curr in mp: ans = max(ans, i - mp[curr])\n            else: mp[curr] = i\n        return ans",
              "java": "class Solution {\n    public int findMaxLength(int[] nums) {\n        Map<Integer, Integer> map = new HashMap<>(); map.put(0, -1);\n        int curr = 0, ans = 0;\n        for (int i = 0; i < nums.length; i++) {\n            curr += nums[i] == 1 ? 1 : -1;\n            if (map.containsKey(curr)) ans = Math.max(ans, i - map.get(curr));\n            else map.put(curr, i);\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int findMaxLength(vector<int>& nums) {\n        unordered_map<int, int> mp; mp[0] = -1;\n        int curr = 0, ans = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            curr += (nums[i] == 1) ? 1 : -1;\n            if (mp.count(curr)) ans = max(ans, i - mp[curr]);\n            else mp[curr] = i;\n        }\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-subarray-sums-divisible-by-k",
            "title": "Subarray Sums Divisible by K",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
            "statement": "Return number of non-empty subarrays with sum divisible by k.",
            "examples": [
              {
                "input": "nums = [4,5,0,-2,-3,1], k = 5",
                "output": "7"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 3 * 10^4"
            ],
            "approach": "Prefix sum modulo k frequency map with normalized positive remainders.",
            "complexity": "Time: O(N), Space: O(K)",
            "code": {
              "python": "class Solution:\n    def subarraysDivByK(self, nums: list[int], k: int) -> int:\n        mp = {0: 1}; curr = ans = 0\n        for x in nums:\n            curr = (curr + x) % k\n            if curr < 0: curr += k\n            ans += mp.get(curr, 0)\n            mp[curr] = mp.get(curr, 0) + 1\n        return ans",
              "java": "class Solution {\n    public int subarraysDivByK(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>(); map.put(0, 1);\n        int curr = 0, ans = 0;\n        for (int x : nums) {\n            curr = (curr + x) % k; if (curr < 0) curr += k;\n            ans += map.getOrDefault(curr, 0);\n            map.put(curr, map.getOrDefault(curr, 0) + 1);\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int subarraysDivByK(vector<int>& nums, int k) {\n        unordered_map<int, int> mp; mp[0] = 1;\n        int curr = 0, ans = 0;\n        for (int x : nums) {\n            curr = (curr + x) % k; if (curr < 0) curr += k;\n            ans += mp[curr]; mp[curr]++;\n        }\n        return ans;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-string-key-hashing",
        "name": "Character & String Mapping",
        "subtitle": "Isomorphism & Mapping",
        "difficulty": "Easy",
        "total_problems": 2,
        "what": "Maps character-to-character or string-to-string relationships using dual HashMaps.",
        "when_to_use": "Isomorphic Strings, Word Pattern.",
        "how_to_identify": "Bijective character/word mapping.",
        "intuition": "Check if m1[s[i]] == t[i] and m2[t[i]] == s[i] for all positions i.",
        "step_by_step": [
          "Initialize dual HashMaps m1 and m2",
          "For i in 0..N-1:",
          "if s[i] in m1 and m1[s[i]] != t[i]: return False",
          "m1[s[i]] = t[i], m2[t[i]] = s[i]"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(26)",
        "code_snippets": {
          "python": "def isIsomorphic(s: str, t: str) -> bool:\n    m1, m2 = {}, {}\n    for c1, c2 in zip(s, t):\n        if (c1 in m1 and m1[c1] != c2) or (c2 in m2 and m2[c2] != c1): return False\n        m1[c1] = c2; m2[c2] = c1\n    return True",
          "java": "public boolean isIsomorphic(String s, String t) {\n    int[] m1 = new int[256], m2 = new int[256];\n    for (int i = 0; i < s.length(); i++) {\n        if (m1[s.charAt(i)] != m2[t.charAt(i)]) return false;\n        m1[s.charAt(i)] = i + 1; m2[t.charAt(i)] = i + 1;\n    }\n    return true;\n}",
          "cpp": "bool isIsomorphic(string s, string t) {\n    vector<int> m1(256, 0), m2(256, 0);\n    for (int i = 0; i < s.length(); i++) {\n        if (m1[s[i]] != m2[t[i]]) return false;\n        m1[s[i]] = i + 1; m2[t[i]] = i + 1;\n    }\n    return true;\n}"
        },
        "questions": [
          {
            "id": "q-isomorphic-strings",
            "title": "Isomorphic Strings",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/isomorphic-strings/",
            "statement": "Determine if characters in s can be replaced to get t.",
            "examples": [
              {
                "input": "s = \"egg\", t = \"add\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length <= 5 * 10^4"
            ],
            "approach": "Track last seen positions of s[i] and t[i].",
            "complexity": "Time: O(N), Space: O(256)",
            "code": {
              "python": "class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        m1, m2 = {}, {}\n        for c1, c2 in zip(s, t):\n            if (c1 in m1 and m1[c1] != c2) or (c2 in m2 and m2[c2] != c1): return False\n            m1[c1] = c2; m2[c2] = c1\n        return True",
              "java": "class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        int[] m1 = new int[256], m2 = new int[256];\n        for (int i = 0; i < s.length(); i++) {\n            if (m1[s.charAt(i)] != m2[t.charAt(i)]) return false;\n            m1[s.charAt(i)] = i + 1; m2[t.charAt(i)] = i + 1;\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        vector<int> m1(256, 0), m2(256, 0);\n        for (int i = 0; i < s.length(); i++) {\n            if (m1[s[i]] != m2[t[i]]) return false;\n            m1[s[i]] = i + 1; m2[t[i]] = i + 1;\n        }\n        return true;\n    }\n};"
            }
          },
          {
            "id": "q-word-pattern",
            "title": "Word Pattern",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/word-pattern/",
            "statement": "Determine if s follows the exact character pattern.",
            "examples": [
              {
                "input": "pattern = \"abba\", s = \"dog cat cat dog\"",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= pattern.length <= 300"
            ],
            "approach": "Dual mapping between pattern characters and split words.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        words = s.split()\n        if len(pattern) != len(words): return False\n        m1, m2 = {}, {}\n        for c, w in zip(pattern, words):\n            if (c in m1 and m1[c] != w) or (w in m2 and m2[w] != c): return False\n            m1[c] = w; m2[w] = c\n        return True",
              "java": "class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        String[] words = s.split(\" \");\n        if (pattern.length() != words.length) return false;\n        Map<Character, String> m1 = new HashMap<>();\n        Map<String, Character> m2 = new HashMap<>();\n        for (int i = 0; i < pattern.length(); i++) {\n            char c = pattern.charAt(i);\n            String w = words[i];\n            if (m1.containsKey(c) && !m1.get(c).equals(w)) return false;\n            if (m2.containsKey(w) && m2.get(w) != c) return false;\n            m1.put(c, w); m2.put(w, c);\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        stringstream ss(s); string w;\n        vector<string> words;\n        while (ss >> w) words.push_back(w);\n        if (pattern.length() != words.size()) return false;\n        unordered_map<char, string> m1; unordered_map<string, char> m2;\n        for (int i = 0; i < pattern.length(); i++) {\n            char c = pattern[i]; string word = words[i];\n            if (m1.count(c) && m1[c] != word) return false;\n            if (m2.count(word) && m2[word] != c) return false;\n            m1[c] = word; m2[word] = c;\n        }\n        return true;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-recursion",
    "name": "Recursion",
    "description": "Master recursive problem decomposition, base cases, recurrence relations, divide & conquer, and state space trees.",
    "icon": "RotateCcw",
    "total_patterns": 4,
    "total_problems": 8,
    "patterns": [
      {
        "id": "pattern-basic-recursion",
        "name": "Basic Recursion",
        "subtitle": "Recurrence Relations & Base Cases",
        "difficulty": "Easy",
        "total_problems": 2,
        "what": "Breaks problem down into smaller self-similar subproblems with base cases.",
        "when_to_use": "Fibonacci Number, Power of Three, Factorial.",
        "how_to_identify": "Mathematical sequence, base case condition.",
        "intuition": "f(n) = f(n-1) + f(n-2) with base case returning concrete value for n <= 1.",
        "step_by_step": [
          "Identify base case condition",
          "Define recurrence relation",
          "Return recursive combination"
        ],
        "time_complexity": "O(2^N) naive, O(N) memoized",
        "space_complexity": "O(N) call stack",
        "code_snippets": {
          "python": "def fib(n: int) -> int:\n    if n <= 1: return n\n    return fib(n - 1) + fib(n - 2)",
          "java": "public int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}",
          "cpp": "int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}"
        },
        "questions": [
          {
            "id": "q-fibonacci-number",
            "title": "Fibonacci Number",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/fibonacci-number/",
            "statement": "Calculate F(n) where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2).",
            "examples": [
              {
                "input": "n = 4",
                "output": "3"
              }
            ],
            "constraints": [
              "0 <= n <= 30"
            ],
            "approach": "Recursive formulation with memoization or iterative array.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def fib(self, n: int) -> int:\n        if n <= 1: return n\n        a, b = 0, 1\n        for _ in range(2, n + 1): a, b = b, a + b\n        return b",
              "java": "class Solution {\n    public int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n};"
            }
          },
          {
            "id": "q-power-of-three",
            "title": "Power of Three",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/power-of-three/",
            "statement": "Given an integer n, return true if it is a power of three.",
            "examples": [
              {
                "input": "n = 27",
                "output": "true"
              }
            ],
            "constraints": [
              "-2^31 <= n <= 2^31 - 1"
            ],
            "approach": "Recursive division by 3 while n % 3 == 0.",
            "complexity": "Time: O(log3 N), Space: O(log3 N)",
            "code": {
              "python": "class Solution:\n    def isPowerOfThree(self, n: int) -> bool:\n        if n <= 0: return False\n        if n == 1: return True\n        return n % 3 == 0 and self.isPowerOfThree(n // 3)",
              "java": "class Solution {\n    public boolean isPowerOfThree(int n) {\n        if (n <= 0) return false;\n        if (n == 1) return true;\n        return n % 3 == 0 && isPowerOfThree(n / 3);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isPowerOfThree(int n) {\n        if (n <= 0) return false;\n        if (n == 1) return true;\n        return n % 3 == 0 && isPowerOfThree(n / 3);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-divide-and-conquer",
        "name": "Divide & Conquer",
        "subtitle": "Subproblem Halving",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Divides problem into independent subproblems of half size, solves recursively, and combines results.",
        "when_to_use": "Pow(x, n), Merge Sort, Quick Select.",
        "how_to_identify": "Subproblem halving, logarithmic call stack depth.",
        "intuition": "Pow(x, n) = Pow(x, n/2) * Pow(x, n/2) reduces multiplication steps from N to log(N).",
        "step_by_step": [
          "Base case n == 0 return 1",
          "Compute half = Pow(x, n // 2)",
          "If n is even, return half * half; else x * half * half"
        ],
        "time_complexity": "O(log N)",
        "space_complexity": "O(log N)",
        "code_snippets": {
          "python": "def myPow(x: float, n: int) -> float:\n    if n < 0: x = 1 / x; n = -n\n    if n == 0: return 1.0\n    half = myPow(x, n // 2)\n    return half * half if n % 2 == 0 else x * half * half",
          "java": "public double myPow(double x, int n) {\n    long N = n;\n    if (N < 0) { x = 1 / x; N = -N; }\n    return fastPow(x, N);\n}\nprivate double fastPow(double x, long n) {\n    if (n == 0) return 1.0;\n    double half = fastPow(x, n / 2);\n    return (n % 2 == 0) ? half * half : x * half * half;\n}",
          "cpp": "double myPow(double x, int n) {\n    long long N = n;\n    if (N < 0) { x = 1 / x; N = -N; }\n    if (N == 0) return 1.0;\n    double half = myPow(x, N / 2);\n    return (N % 2 == 0) ? half * half : x * half * half;\n}"
        },
        "questions": [
          {
            "id": "q-pow-x-n",
            "title": "Pow(x, n)",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/powx-n/",
            "statement": "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
            "examples": [
              {
                "input": "x = 2.00000, n = 10",
                "output": "1024.00000"
              }
            ],
            "constraints": [
              "-100.0 < x < 100.0",
              "-2^31 <= n <= 2^31 - 1"
            ],
            "approach": "Binary Exponentiation (Divide & Conquer).",
            "complexity": "Time: O(log N), Space: O(log N)",
            "code": {
              "python": "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0: x = 1 / x; n = -n\n        if n == 0: return 1.0\n        half = self.myPow(x, n // 2)\n        return half * half if n % 2 == 0 else x * half * half",
              "java": "class Solution {\n    public double myPow(double x, int n) {\n        long N = n;\n        if (N < 0) { x = 1 / x; N = -N; }\n        return helper(x, N);\n    }\n    private double helper(double x, long n) {\n        if (n == 0) return 1.0;\n        double half = helper(x, n / 2);\n        return (n % 2 == 0) ? half * half : x * half * half;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    double myPow(double x, int n) {\n        long long N = n;\n        if (N < 0) { x = 1 / x; N = -N; }\n        if (N == 0) return 1.0;\n        double half = myPow(x, N / 2);\n        return (N % 2 == 0) ? half * half : x * half * half;\n    }\n};"
            }
          },
          {
            "id": "q-sort-an-array",
            "title": "Sort an Array",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/sort-an-array/",
            "statement": "Given an array of integers nums, sort the array in ascending order using Merge Sort in O(n log n) time.",
            "examples": [
              {
                "input": "nums = [5,2,3,1]",
                "output": "[1,2,3,5]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 5 * 10^4"
            ],
            "approach": "Merge Sort Divide & Conquer.",
            "complexity": "Time: O(N log N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def sortArray(self, nums: list[int]) -> list[int]:\n        if len(nums) <= 1: return nums\n        mid = len(nums) // 2\n        left = self.sortArray(nums[:mid])\n        right = self.sortArray(nums[mid:])\n        return self.merge(left, right)\n    def merge(self, l, r):\n        res = []\n        i = j = 0\n        while i < len(l) and j < len(r):\n            if l[i] <= r[j]: res.append(l[i]); i += 1\n            else: res.append(r[j]); j += 1\n        res.extend(l[i:]); res.extend(r[j:])\n        return res",
              "java": "class Solution {\n    public int[] sortArray(int[] nums) {\n        mergeSort(nums, 0, nums.length - 1);\n        return nums;\n    }\n    private void mergeSort(int[] nums, int l, int r) {\n        if (l >= r) return;\n        int m = l + (r - l) / 2;\n        mergeSort(nums, l, m);\n        mergeSort(nums, m + 1, r);\n        merge(nums, l, m, r);\n    }\n    private void merge(int[] nums, int l, int m, int r) {\n        int[] tmp = new int[r - l + 1];\n        int i = l, j = m + 1, k = 0;\n        while (i <= m && j <= r) {\n            if (nums[i] <= nums[j]) tmp[k++] = nums[i++];\n            else tmp[k++] = nums[j++];\n        }\n        while (i <= m) tmp[k++] = nums[i++];\n        while (j <= r) tmp[k++] = nums[j++];\n        System.arraycopy(tmp, 0, nums, l, tmp.length);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> sortArray(vector<int>& nums) {\n        mergeSort(nums, 0, nums.size() - 1);\n        return nums;\n    }\n    void mergeSort(vector<int>& nums, int l, int r) {\n        if (l >= r) return;\n        int m = l + (r - l) / 2;\n        mergeSort(nums, l, m);\n        mergeSort(nums, m + 1, r);\n        vector<int> tmp;\n        int i = l, j = m + 1;\n        while (i <= m && j <= r) {\n            if (nums[i] <= nums[j]) tmp.push_back(nums[i++]);\n            else tmp.push_back(nums[j++]);\n        }\n        while (i <= m) tmp.push_back(nums[i++]);\n        while (j <= r) tmp.push_back(nums[j++]);\n        for (int k = 0; k < tmp.size(); k++) nums[l + k] = tmp[k];\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-recursive-traversal",
        "name": "Recursive Node Traversal",
        "subtitle": "Tree & Pair Reversal",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Recursively processes nodes by delegating subproblem solutions to child/next pointers.",
        "when_to_use": "Reverse String Recursively, Swap Nodes in Pairs.",
        "how_to_identify": "Pair node swapping, recursive linked list reversal.",
        "intuition": "Swap first two nodes head and head.next, then recursively swap head.next.next.",
        "step_by_step": [
          "Base case: if head is null or head.next is null, return head",
          "Set first = head, second = head.next",
          "first.next = swapPairs(second.next)",
          "second.next = first, return second"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def swapPairs(head):\n    if not head or not head.next: return head\n    nxt = head.next.next\n    second = head.next\n    second.next = head\n    head.next = swapPairs(nxt)\n    return second",
          "java": "public ListNode swapPairs(ListNode head) {\n    if (head == null || head.next == null) return head;\n    ListNode second = head.next;\n    head.next = swapPairs(second.next);\n    second.next = head;\n    return second;\n}",
          "cpp": "ListNode* swapPairs(ListNode* head) {\n    if (!head || !head->next) return head;\n    ListNode *second = head->next;\n    head->next = swapPairs(second->next);\n    second->next = head;\n    return second;\n}"
        },
        "questions": [
          {
            "id": "q-swap-nodes-in-pairs",
            "title": "Swap Nodes in Pairs",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
            "statement": "Given a linked list, swap every two adjacent nodes and return its head.",
            "examples": [
              {
                "input": "head = [1,2,3,4]",
                "output": "[2,1,4,3]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 100"
            ],
            "approach": "Recursive node pointer swap.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head or not head.next: return head\n        second = head.next\n        head.next = self.swapPairs(second.next)\n        second.next = head\n        return second",
              "java": "class Solution {\n    public ListNode swapPairs(ListNode head) {\n        if (head == null || head.next == null) return head;\n        ListNode second = head.next;\n        head.next = swapPairs(second.next);\n        second.next = head;\n        return second;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        if (!head || !head->next) return head;\n        ListNode *second = head->next;\n        head->next = swapPairs(second->next);\n        second->next = head;\n        return second;\n    }\n};"
            }
          },
          {
            "id": "q-reverse-string-recursion",
            "title": "Reverse String Recursively",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/reverse-string/",
            "statement": "Reverse a string recursively by swapping left and right boundary indices.",
            "examples": [
              {
                "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
                "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
              }
            ],
            "constraints": [
              "1 <= s.length <= 10^5"
            ],
            "approach": "Recursive helper function taking (left, right) boundaries.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def reverseString(self, s: list[str]) -> None:\n        def helper(l, r):\n            if l >= r: return\n            s[l], s[r] = s[r], s[l]\n            helper(l + 1, r - 1)\n        helper(0, len(s) - 1)",
              "java": "class Solution {\n    public void reverseString(char[] s) {\n        helper(s, 0, s.length - 1);\n    }\n    private void helper(char[] s, int l, int r) {\n        if (l >= r) return;\n        char tmp = s[l]; s[l] = s[r]; s[r] = tmp;\n        helper(s, l + 1, r - 1);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        helper(s, 0, s.size() - 1);\n    }\n    void helper(vector<char>& s, int l, int r) {\n        if (l >= r) return;\n        swap(s[l], s[r]);\n        helper(s, l + 1, r - 1);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-recursion-backtracking-intro",
        "name": "State Space Exploration",
        "subtitle": "Phone Digits & Combinations",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Recursively explores all decision branches, building solutions incrementally.",
        "when_to_use": "Letter Combinations of a Phone Number, Generate Parentheses.",
        "how_to_identify": "Generate all valid combinations, phone number key combinations.",
        "intuition": "For each index, loop over valid choices, recurse for next index, backtrack.",
        "step_by_step": [
          "Define recursive function backtrack(index, path)",
          "If index == len(digits), add path to results",
          "Loop choices at current index, call backtrack(index+1, path + choice)"
        ],
        "time_complexity": "O(4^N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def letterCombinations(digits: str):\n    if not digits: return []\n    phone = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits): res.append(path); return\n        for char in phone[digits[idx]]:\n            backtrack(idx + 1, path + char)\n    backtrack(0, '')\n    return res",
          "java": "public List<String> letterCombinations(String digits) {\n    List<String> res = new ArrayList<>();\n    if (digits.isEmpty()) return res;\n    String[] phone = {\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\n    backtrack(res, digits, phone, 0, new StringBuilder());\n    return res;\n}\nprivate void backtrack(List<String> res, String digits, String[] phone, int idx, StringBuilder path) {\n    if (idx == digits.length()) { res.add(path.toString()); return; }\n    String letters = phone[digits.charAt(idx) - '0'];\n    for (char c : letters.toCharArray()) {\n        path.append(c);\n        backtrack(res, digits, phone, idx + 1, path);\n        path.deleteCharAt(path.length() - 1);\n    }\n}",
          "cpp": "vector<string> letterCombinations(string digits) {\n    vector<string> res;\n    if (digits.empty()) return res;\n    vector<string> phone = {\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\n    function<void(int, string)> backtrack = [&](int idx, string path) {\n        if (idx == digits.length()) { res.push_back(path); return; }\n        for (char c : phone[digits[idx] - '0']) backtrack(idx + 1, path + c);\n    };\n    backtrack(0, \"\");\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-letter-combinations-phone",
            "title": "Letter Combinations of a Phone Number",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            "statement": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
            "examples": [
              {
                "input": "digits = \"23\"",
                "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
              }
            ],
            "constraints": [
              "0 <= digits.length <= 4"
            ],
            "approach": "Recursive backtracking over digit-to-letters mappings.",
            "complexity": "Time: O(4^N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def letterCombinations(self, digits: str) -> list[str]:\n        if not digits: return []\n        phone = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}\n        res = []\n        def backtrack(idx, path):\n            if idx == len(digits): res.append(path); return\n            for char in phone[digits[idx]]: backtrack(idx + 1, path + char)\n        backtrack(0, '')\n        return res",
              "java": "class Solution {\n    public List<String> letterCombinations(String digits) {\n        List<String> res = new ArrayList<>();\n        if (digits.isEmpty()) return res;\n        String[] phone = {\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\n        backtrack(res, digits, phone, 0, new StringBuilder());\n        return res;\n    }\n    private void backtrack(List<String> res, String digits, String[] phone, int idx, StringBuilder path) {\n        if (idx == digits.length()) { res.add(path.toString()); return; }\n        String letters = phone[digits.charAt(idx) - '0'];\n        for (char c : letters.toCharArray()) {\n            path.append(c);\n            backtrack(res, digits, phone, idx + 1, path);\n            path.deleteCharAt(path.length() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        vector<string> res;\n        if (digits.empty()) return res;\n        vector<string> phone = {\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\n        function<void(int, string)> backtrack = [&](int idx, string path) {\n            if (idx == digits.length()) { res.push_back(path); return; }\n            for (char c : phone[digits[idx] - '0']) backtrack(idx + 1, path + c);\n        };\n        backtrack(0, \"\");\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-generate-parentheses",
            "title": "Generate Parentheses",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/generate-parentheses/",
            "statement": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            "examples": [
              {
                "input": "n = 3",
                "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
              }
            ],
            "constraints": [
              "1 <= n <= 8"
            ],
            "approach": "Backtracking with open_count < n and close_count < open_count constraints.",
            "complexity": "Time: O(4^N / sqrt(N)), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        res = []\n        def backtrack(path, open_c, close_c):\n            if len(path) == 2 * n: res.append(path); return\n            if open_c < n: backtrack(path + '(', open_c + 1, close_c)\n            if close_c < open_c: backtrack(path + ')', open_c, close_c + 1)\n        backtrack('', 0, 0)\n        return res",
              "java": "class Solution {\n    public List<String> generateParenthesis(int n) {\n        List<String> res = new ArrayList<>();\n        backtrack(res, new StringBuilder(), 0, 0, n);\n        return res;\n    }\n    private void backtrack(List<String> res, StringBuilder path, int openC, int closeC, int n) {\n        if (path.length() == 2 * n) { res.add(path.toString()); return; }\n        if (openC < n) {\n            path.append('('); backtrack(res, path, openC + 1, closeC, n); path.deleteCharAt(path.length() - 1);\n        }\n        if (closeC < openC) {\n            path.append(')'); backtrack(res, path, openC, closeC + 1, n); path.deleteCharAt(path.length() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        vector<string> res;\n        function<void(string, int, int)> backtrack = [&](string path, int openC, int closeC) {\n            if (path.length() == 2 * n) { res.push_back(path); return; }\n            if (openC < n) backtrack(path + '(', openC + 1, closeC);\n            if (closeC < openC) backtrack(path + ')', openC, closeC + 1);\n        };\n        backtrack(\"\", 0, 0);\n        return res;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-trees",
    "name": "Trees",
    "description": "Master Binary Trees, DFS & BFS traversals, path sum problems, tree construction, LCA, and Tree DP.",
    "icon": "GitCommit",
    "total_patterns": 6,
    "total_problems": 11,
    "patterns": [
      {
        "id": "pattern-tree-dfs",
        "name": "Tree DFS Traversals",
        "subtitle": "Preorder, Inorder & Postorder",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Traverses binary tree using Depth-First Search recursively or with stack.",
        "when_to_use": "Max Depth of Binary Tree, Same Tree, Inorder Traversal.",
        "how_to_identify": "Tree traversal, depth calculation, node equivalence.",
        "intuition": "Process root node, recurse left subtree, recurse right subtree.",
        "step_by_step": [
          "Base case: if node is null, return default",
          "Recurse on left child",
          "Recurse on right child",
          "Combine subtree answers"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(H) where H is tree height",
        "code_snippets": {
          "python": "def maxDepth(root):\n    if not root: return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))",
          "java": "public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}",
          "cpp": "int maxDepth(TreeNode* root) {\n    if (!root) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}"
        },
        "questions": [
          {
            "id": "q-max-depth-binary-tree",
            "title": "Maximum Depth of Binary Tree",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            "statement": "Given the root of a binary tree, return its maximum depth.",
            "examples": [
              {
                "input": "root = [3,9,20,null,null,15,7]",
                "output": "3"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 10^4"
            ],
            "approach": "Recursive DFS: 1 + max(dfs(left), dfs(right)).",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))",
              "java": "class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (!root) return 0;\n        return 1 + max(maxDepth(root->left), maxDepth(root->right));\n    }\n};"
            }
          },
          {
            "id": "q-same-tree",
            "title": "Same Tree",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/same-tree/",
            "statement": "Given the roots of two binary trees p and q, check if they are the same or not.",
            "examples": [
              {
                "input": "p = [1,2,3], q = [1,2,3]",
                "output": "true"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 100"
            ],
            "approach": "DFS comparing node values and recursive subtrees.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)",
              "java": "class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;\n        if (p == null || q == null || p.val != q.val) return false;\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        if (!p && !q) return true;\n        if (!p || !q || p->val != q->val) return false;\n        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-tree-bfs",
        "name": "Tree BFS Level-Order",
        "subtitle": "Queue Level Traversals",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Uses Queue to traverse binary tree level by level.",
        "when_to_use": "Binary Tree Level Order Traversal, Binary Tree Right Side View.",
        "how_to_identify": "Level-by-level view, right side view of tree.",
        "intuition": "Process queue items in batches matching current level size.",
        "step_by_step": [
          "Enqueue root",
          "Loop queue level size: pop node, add last node of level to right side view, enqueue non-null children"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(W) where W is max tree width",
        "code_snippets": {
          "python": "def rightSideView(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        sz = len(q)\n        for i in range(sz):\n            n = q.popleft()\n            if i == sz - 1: res.append(n.val)\n            if n.left: q.append(n.left)\n            if n.right: q.append(n.right)\n    return res",
          "java": "public List<Integer> rightSideView(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>(); q.add(root);\n    while (!q.isEmpty()) {\n        int sz = q.size();\n        for (int i = 0; i < sz; i++) {\n            TreeNode n = q.poll();\n            if (i == sz - 1) res.add(n.val);\n            if (n.left != null) q.add(n.left);\n            if (n.right != null) q.add(n.right);\n        }\n    }\n    return res;\n}",
          "cpp": "vector<int> rightSideView(TreeNode* root) {\n    vector<int> res;\n    if (!root) return res;\n    queue<TreeNode*> q; q.push(root);\n    while (!q.empty()) {\n        int sz = q.size();\n        for (int i = 0; i < sz; i++) {\n            TreeNode* n = q.front(); q.pop();\n            if (i == sz - 1) res.push_back(n->val);\n            if (n->left) q.push(n->left);\n            if (n->right) q.push(n->right);\n        }\n    }\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-binary-tree-right-side-view",
            "title": "Binary Tree Right Side View",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/binary-tree-right-side-view/",
            "statement": "Return values of the nodes you can see ordered from top to bottom standing on the right side of the tree.",
            "examples": [
              {
                "input": "root = [1,2,3,null,5,null,4]",
                "output": "[1,3,4]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 100"
            ],
            "approach": "BFS level order saving the last node value at each level.",
            "complexity": "Time: O(N), Space: O(W)",
            "code": {
              "python": "class Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> list[int]:\n        if not root: return []\n        res, q = [], deque([root])\n        while q:\n            sz = len(q)\n            for i in range(sz):\n                n = q.popleft()\n                if i == sz - 1: res.append(n.val)\n                if n.left: q.append(n.left)\n                if n.right: q.append(n.right)\n        return res",
              "java": "class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>(); q.add(root);\n        while (!q.isEmpty()) {\n            int sz = q.size();\n            for (int i = 0; i < sz; i++) {\n                TreeNode n = q.poll();\n                if (i == sz - 1) res.add(n.val);\n                if (n.left != null) q.add(n.left);\n                if (n.right != null) q.add(n.right);\n            }\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        vector<int> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root);\n        while (!q.empty()) {\n            int sz = q.size();\n            for (int i = 0; i < sz; i++) {\n                TreeNode* n = q.front(); q.pop();\n                if (i == sz - 1) res.push_back(n->val);\n                if (n->left) q.push(n->left);\n                if (n->right) q.push(n->right);\n            }\n        }\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-binary-tree-inorder-traversal",
            "title": "Binary Tree Inorder Traversal",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            "statement": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
            "examples": [
              {
                "input": "root = [1,null,2,3]",
                "output": "[1,3,2]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 100"
            ],
            "approach": "Recursive or stack-based inorder (Left, Root, Right) traversal.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> list[int]:\n        res = []\n        def dfs(node):\n            if not node: return\n            dfs(node.left)\n            res.append(node.val)\n            dfs(node.right)\n        dfs(root)\n        return res",
              "java": "class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        dfs(root, res);\n        return res;\n    }\n    private void dfs(TreeNode node, List<Integer> res) {\n        if (node == null) return;\n        dfs(node.left, res);\n        res.add(node.val);\n        dfs(node.right, res);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<int> res;\n        function<void(TreeNode*)> dfs = [&](TreeNode* node) {\n            if (!node) return;\n            dfs(node->left);\n            res.push_back(node->val);\n            dfs(node->right);\n        };\n        dfs(root);\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-tree-construction",
        "name": "Tree Construction",
        "subtitle": "Preorder & Inorder Reconstruction",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Reconstructs unique binary tree from combination of preorder and inorder traversal arrays.",
        "when_to_use": "Construct Binary Tree from Preorder and Inorder Traversal.",
        "how_to_identify": "Build tree from traversals.",
        "intuition": "First element in preorder is root. Locate root in inorder array to divide into left and right subtrees.",
        "step_by_step": [
          "Root val = preorder[0]",
          "Find root index in inorder array",
          "Recursively construct left subtree and right subtree"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def buildTree(preorder, inorder):\n    if not preorder or not inorder: return None\n    root_val = preorder[0]\n    root = TreeNode(root_val)\n    idx = inorder.index(root_val)\n    root.left = buildTree(preorder[1:idx+1], inorder[:idx])\n    root.right = buildTree(preorder[idx+1:], inorder[idx+1:])\n    return root",
          "java": "public TreeNode buildTree(int[] preorder, int[] inorder) {\n    Map<Integer, Integer> inMap = new HashMap<>();\n    for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);\n    return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1, inMap);\n}\nprivate TreeNode build(int[] preorder, int pS, int pE, int iS, int iE, Map<Integer, Integer> inMap) {\n    if (pS > pE || iS > iE) return null;\n    TreeNode root = new TreeNode(preorder[pS]);\n    int inRoot = inMap.get(root.val);\n    int numsLeft = inRoot - iS;\n    root.left = build(preorder, pS + 1, pS + numsLeft, iS, inRoot - 1, inMap);\n    root.right = build(preorder, pS + numsLeft + 1, pE, inRoot + 1, iE, inMap);\n    return root;\n}",
          "cpp": "TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n    unordered_map<int, int> inMap;\n    for (int i = 0; i < inorder.size(); i++) inMap[inorder[i]] = i;\n    function<TreeNode*(int,int,int,int)> build = [&](int pS, int pE, int iS, int iE) -> TreeNode* {\n        if (pS > pE || iS > iE) return NULL;\n        TreeNode* root = new TreeNode(preorder[pS]);\n        int inRoot = inMap[root->val];\n        int numsLeft = inRoot - iS;\n        root->left = build(pS + 1, pS + numsLeft, iS, inRoot - 1);\n        root->right = build(pS + numsLeft + 1, pE, inRoot + 1, iE);\n        return root;\n    };\n    return build(0, preorder.size() - 1, 0, inorder.size() - 1);\n}"
        },
        "questions": [
          {
            "id": "q-construct-binary-tree-preorder-inorder",
            "title": "Construct Binary Tree from Preorder and Inorder Traversal",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            "statement": "Given two integer arrays preorder and inorder, construct and return the binary tree.",
            "examples": [
              {
                "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
                "output": "[3,9,20,null,null,15,7]"
              }
            ],
            "constraints": [
              "1 <= preorder.length <= 3000"
            ],
            "approach": "Preorder root element split over inorder hashmap index.",
            "complexity": "Time: O(N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def buildTree(self, preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:\n        if not preorder or not inorder: return None\n        root_val = preorder[0]\n        root = TreeNode(root_val)\n        idx = inorder.index(root_val)\n        root.left = self.buildTree(preorder[1:idx+1], inorder[:idx])\n        root.right = self.buildTree(preorder[idx+1:], inorder[idx+1:])\n        return root",
              "java": "class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        Map<Integer, Integer> inMap = new HashMap<>();\n        for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);\n        return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1, inMap);\n    }\n    private TreeNode build(int[] preorder, int pS, int pE, int iS, int iE, Map<Integer, Integer> inMap) {\n        if (pS > pE || iS > iE) return null;\n        TreeNode root = new TreeNode(preorder[pS]);\n        int inRoot = inMap.get(root.val);\n        int numsLeft = inRoot - iS;\n        root.left = build(preorder, pS + 1, pS + numsLeft, iS, inRoot - 1, inMap);\n        root.right = build(preorder, pS + numsLeft + 1, pE, inRoot + 1, iE, inMap);\n        return root;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        unordered_map<int, int> inMap;\n        for (int i = 0; i < inorder.size(); i++) inMap[inorder[i]] = i;\n        function<TreeNode*(int,int,int,int)> build = [&](int pS, int pE, int iS, int iE) -> TreeNode* {\n            if (pS > pE || iS > iE) return NULL;\n            TreeNode* root = new TreeNode(preorder[pS]);\n            int inRoot = inMap[root->val];\n            int numsLeft = inRoot - iS;\n            root->left = build(pS + 1, pS + numsLeft, iS, inRoot - 1);\n            root->right = build(pS + numsLeft + 1, pE, inRoot + 1, iE);\n            return root;\n        };\n        return build(0, preorder.size() - 1, 0, inorder.size() - 1);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-tree-path-sum",
        "name": "Tree Path Sum",
        "subtitle": "Root-to-Leaf Path Checks",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Recursively subtracts node values along root-to-leaf paths to check for target sum.",
        "when_to_use": "Path Sum, Path Sum II.",
        "how_to_identify": "Root-to-leaf path sum target.",
        "intuition": "At leaf node (no left & right child), check if remaining targetSum == node.val.",
        "step_by_step": [
          "If node is null, return false",
          "If leaf node, return targetSum == node.val",
          "Recurse left and right with targetSum - node.val"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def hasPathSum(root, targetSum):\n    if not root: return False\n    if not root.left and not root.right: return root.val == targetSum\n    return hasPathSum(root.left, targetSum - root.val) or hasPathSum(root.right, targetSum - root.val)",
          "java": "public boolean hasPathSum(TreeNode root, int targetSum) {\n    if (root == null) return false;\n    if (root.left == null && root.right == null) return root.val == targetSum;\n    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);\n}",
          "cpp": "bool hasPathSum(TreeNode* root, int targetSum) {\n    if (!root) return false;\n    if (!root->left && !root->right) return root->val == targetSum;\n    return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum - root->val);\n}"
        },
        "questions": [
          {
            "id": "q-path-sum",
            "title": "Path Sum",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/path-sum/",
            "statement": "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all values along the path equals targetSum.",
            "examples": [
              {
                "input": "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
                "output": "true"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 5000"
            ],
            "approach": "Recursive leaf sum check.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:\n        if not root: return False\n        if not root.left and not root.right: return root.val == targetSum\n        return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(root.right, targetSum - root.val)",
              "java": "class Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        if (root == null) return false;\n        if (root.left == null && root.right == null) return root.val == targetSum;\n        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        if (!root) return false;\n        if (!root->left && !root->right) return root->val == targetSum;\n        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum - root.val);\n    }\n};"
            }
          },
          {
            "id": "q-path-sum-ii",
            "title": "Path Sum II",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/path-sum-ii/",
            "statement": "Return all root-to-leaf paths where each path's sum equals targetSum.",
            "examples": [
              {
                "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
                "output": "[[5,4,11,2],[5,8,4,5]]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 5000"
            ],
            "approach": "Backtracking DFS accumulating root-to-leaf paths.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> list[list[int]]:\n        res = []\n        def dfs(node, curr_sum, path):\n            if not node: return\n            path.append(node.val)\n            curr_sum += node.val\n            if not node.left and not node.right and curr_sum == targetSum:\n                res.append(list(path))\n            dfs(node.left, curr_sum, path)\n            dfs(node.right, curr_sum, path)\n            path.pop()\n        dfs(root, 0, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        List<List<Integer>> res = new ArrayList<>();\n        dfs(root, targetSum, new ArrayList<>(), res);\n        return res;\n    }\n    private void dfs(TreeNode node, int sum, List<Integer> path, List<List<Integer>> res) {\n        if (node == null) return;\n        path.add(node.val);\n        if (node.left == null && node.right == null && sum == node.val) res.add(new ArrayList<>(path));\n        dfs(node.left, sum - node.val, path, res);\n        dfs(node.right, sum - node.val, path, res);\n        path.remove(path.size() - 1);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\n        vector<vector<int>> res; vector<int> path;\n        function<void(TreeNode*, int)> dfs = [&](TreeNode* node, int sum) {\n            if (!node) return;\n            path.push_back(node->val);\n            if (!node->left && !node->right && sum == node->val) res.push_back(path);\n            dfs(node->left, sum - node->val);\n            dfs(node->right, sum - node->val);\n            path.pop_back();\n        };\n        dfs(root, targetSum);\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-tree-ancestor",
        "name": "Tree Ancestors & Inversion",
        "subtitle": "LCA & Mirroring",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Recursively finds lowest common ancestor of two nodes or mirrors left and right subtrees.",
        "when_to_use": "Lowest Common Ancestor of a Binary Tree, Invert Binary Tree.",
        "how_to_identify": "LCA of binary tree, invert/mirror binary tree.",
        "intuition": "LCA returns non-null node if target p or q is found in left or right subtrees.",
        "step_by_step": [
          "If root is null or root == p or root == q, return root",
          "l = LCA(root.left), r = LCA(root.right)",
          "If both l and r non-null, root is LCA; else return non-null l or r"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def lowestCommonAncestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    if left and right: return root\n    return left or right",
          "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}",
          "cpp": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    if (!root || root == p || root == q) return root;\n    TreeNode* left = lowestCommonAncestor(root->left, p, q);\n    TreeNode* right = lowestCommonAncestor(root->right, p, q);\n    if (left && right) return root;\n    return left ? left : right;\n}"
        },
        "questions": [
          {
            "id": "q-lowest-common-ancestor-binary-tree",
            "title": "Lowest Common Ancestor of a Binary Tree",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            "statement": "Find the lowest common ancestor (LCA) of two given nodes p and q in the binary tree.",
            "examples": [
              {
                "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
                "output": "3"
              }
            ],
            "constraints": [
              "2 <= Number of nodes <= 10^5"
            ],
            "approach": "Recursive DFS bubbling up target node matches.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root or root == p or root == q: return root\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n        if left and right: return root\n        return left or right",
              "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null || root == p || root == q) return root;\n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        return left != null ? left : right;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        if (!root || root == p || root == q) return root;\n        TreeNode* left = lowestCommonAncestor(root->left, p, q);\n        TreeNode* right = lowestCommonAncestor(root->right, p, q);\n        if (left && right) return root;\n        return left ? left : right;\n    }\n};"
            }
          },
          {
            "id": "q-invert-binary-tree",
            "title": "Invert Binary Tree",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/invert-binary-tree/",
            "statement": "Given the root of a binary tree, invert the tree, and return its root.",
            "examples": [
              {
                "input": "root = [4,2,7,1,3,6,9]",
                "output": "[4,7,2,9,6,3,1]"
              }
            ],
            "constraints": [
              "0 <= Number of nodes <= 100"
            ],
            "approach": "Swap left and right children recursively.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root: return None\n        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)\n        return root",
              "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n        TreeNode tmp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(tmp);\n        return root;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (!root) return NULL;\n        TreeNode* tmp = root->left;\n        root->left = invertTree(root->right);\n        root->right = invertTree(tmp);\n        return root;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-tree-dp",
        "name": "Tree DP & Diameter",
        "subtitle": "Bottom-Up Subtree Aggregation",
        "difficulty": "Easy \u2192 Hard",
        "total_problems": 2,
        "what": "Aggregates path metrics bottom-up from leaf nodes to root.",
        "when_to_use": "Diameter of Binary Tree, Binary Tree Maximum Path Sum.",
        "how_to_identify": "Diameter of tree, max path sum across nodes.",
        "intuition": "For each node, combined path length passing through node = left_height + right_height. Update global max.",
        "step_by_step": [
          "Define helper depth(node) returning max height",
          "Max path passing through current node = depth(left) + depth(right)",
          "Update global maximum",
          "Return 1 + max(depth(left), depth(right))"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def diameterOfBinaryTree(root):\n    ans = 0\n    def depth(node):\n        nonlocal ans\n        if not node: return 0\n        l, r = depth(node.left), depth(node.right)\n        ans = max(ans, l + r)\n        return 1 + max(l, r)\n    depth(root)\n    return ans",
          "java": "public int diameterOfBinaryTree(TreeNode root) {\n    int[] ans = new int[1];\n    depth(root, ans);\n    return ans[0];\n}\nprivate int depth(TreeNode node, int[] ans) {\n    if (node == null) return 0;\n    int l = depth(node.left, ans), r = depth(node.right, ans);\n    ans[0] = Math.max(ans[0], l + r);\n    return 1 + Math.max(l, r);\n}",
          "cpp": "int diameterOfBinaryTree(TreeNode* root) {\n    int ans = 0;\n    function<int(TreeNode*)> depth = [&](TreeNode* node) {\n        if (!node) return 0;\n        int l = depth(node->left), r = depth(node->right);\n        ans = max(ans, l + r);\n        return 1 + max(l, r);\n    };\n    depth(root);\n    return ans;\n}"
        },
        "questions": [
          {
            "id": "q-diameter-of-binary-tree",
            "title": "Diameter of Binary Tree",
            "difficulty": "Easy",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/diameter-of-binary-tree/",
            "statement": "Return the length of the diameter of the tree (longest path between any two nodes).",
            "examples": [
              {
                "input": "root = [1,2,3,4,5]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 10^4"
            ],
            "approach": "Bottom-up DFS calculating height while updating max diameter (left_height + right_height).",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        ans = 0\n        def depth(node):\n            nonlocal ans\n            if not node: return 0\n            l, r = depth(node.left), depth(node.right)\n            ans = max(ans, l + r)\n            return 1 + max(l, r)\n        depth(root)\n        return ans",
              "java": "class Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        int[] ans = new int[1];\n        depth(root, ans);\n        return ans[0];\n    }\n    private int depth(TreeNode node, int[] ans) {\n        if (node == null) return 0;\n        int l = depth(node.left, ans), r = depth(node.right, ans);\n        ans[0] = Math.max(ans[0], l + r);\n        return 1 + Math.max(l, r);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        int ans = 0;\n        function<int(TreeNode*)> depth = [&](TreeNode* node) {\n            if (!node) return 0;\n            int l = depth(node->left), r = depth(node->right);\n            ans = max(ans, l + r);\n            return 1 + max(l, r);\n        };\n        depth(root);\n        return ans;\n    }\n};"
            }
          },
          {
            "id": "q-binary-tree-max-path-sum",
            "title": "Binary Tree Maximum Path Sum",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            "statement": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. Return maximum path sum.",
            "examples": [
              {
                "input": "root = [-10,9,20,null,null,15,7]",
                "output": "42"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 3 * 10^4"
            ],
            "approach": "Tree DP bottom-up max path sum.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        ans = float('-inf')\n        def max_gain(node):\n            nonlocal ans\n            if not node: return 0\n            l = max(max_gain(node.left), 0)\n            r = max(max_gain(node.right), 0)\n            ans = max(ans, node.val + l + r)\n            return node.val + max(l, r)\n        max_gain(root)\n        return ans",
              "java": "class Solution {\n    public int maxPathSum(TreeNode root) {\n        int[] ans = new int[]{Integer.MIN_VALUE};\n        maxGain(root, ans);\n        return ans[0];\n    }\n    private int maxGain(TreeNode node, int[] ans) {\n        if (node == null) return 0;\n        int l = Math.max(maxGain(node.left, ans), 0);\n        int r = Math.max(maxGain(node.right, ans), 0);\n        ans[0] = Math.max(ans[0], node.val + l + r);\n        return node.val + Math.max(l, r);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        int ans = INT_MIN;\n        function<int(TreeNode*)> maxGain = [&](TreeNode* node) {\n            if (!node) return 0;\n            int l = max(maxGain(node->left), 0);\n            int r = max(maxGain(node->right), 0);\n            ans = max(ans, node->val + l + r);\n            return node->val + max(l, r);\n        };\n        maxGain(root);\n        return ans;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-binary-search-tree",
    "name": "Binary Search Tree",
    "description": "Master BST search property (left < root < right), BST validation, LCA in BST, and inorder sorted order.",
    "icon": "Binary",
    "total_patterns": 5,
    "total_problems": 8,
    "patterns": [
      {
        "id": "pattern-bst-search-insert",
        "name": "BST Search & Insert",
        "subtitle": "Binary Search Property",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Leverages left < root < right property to search or insert elements in O(H) time.",
        "when_to_use": "Search in BST, Insert into BST.",
        "how_to_identify": "Search in BST, insert node in BST.",
        "intuition": "If target < root.val, go left; if target > root.val, go right.",
        "step_by_step": [
          "If root is null or root.val == val, return root",
          "If val < root.val, recurse left",
          "Else recurse right"
        ],
        "time_complexity": "O(H)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def searchBST(root, val):\n    if not root or root.val == val: return root\n    return searchBST(root.left, val) if val < root.val else searchBST(root.right, val)",
          "java": "public TreeNode searchBST(TreeNode root, int val) {\n    if (root == null || root.val == val) return root;\n    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}",
          "cpp": "TreeNode* searchBST(TreeNode* root, int val) {\n    if (!root || root->val == val) return root;\n    return val < root->val ? searchBST(root->left, val) : searchBST(root->right, val);\n}"
        },
        "questions": [
          {
            "id": "q-search-in-bst",
            "title": "Search in a Binary Search Tree",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
            "statement": "Find the node in the BST that has node's value equal to val.",
            "examples": [
              {
                "input": "root = [4,2,7,1,3], val = 2",
                "output": "[2,1,3]"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 5000"
            ],
            "approach": "Binary search property comparison.",
            "complexity": "Time: O(H), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:\n        if not root or root.val == val: return root\n        return self.searchBST(root.left, val) if val < root.val else self.searchBST(root.right, val)",
              "java": "class Solution {\n    public TreeNode searchBST(TreeNode root, int val) {\n        if (root == null || root.val == val) return root;\n        return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* searchBST(TreeNode* root, int val) {\n        if (!root || root->val == val) return root;\n        return val < root->val ? searchBST(root->left, val) : searchBST(root->right, val);\n    }\n};"
            }
          },
          {
            "id": "q-insert-into-bst",
            "title": "Insert into a Binary Search Tree",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
            "statement": "Insert a value into the BST and return the root node of the BST after insertion.",
            "examples": [
              {
                "input": "root = [4,2,7,1,3], val = 5",
                "output": "[4,2,7,1,3,5]"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 10^4"
            ],
            "approach": "Traverse down until null node, insert new TreeNode(val).",
            "complexity": "Time: O(H), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:\n        if not root: return TreeNode(val)\n        if val < root.val: root.left = self.insertIntoBST(root.left, val)\n        else: root.right = self.insertIntoBST(root.right, val)\n        return root",
              "java": "class Solution {\n    public TreeNode insertIntoBST(TreeNode root, int val) {\n        if (root == null) return new TreeNode(val);\n        if (val < root.val) root.left = insertIntoBST(root.left, val);\n        else root.right = insertIntoBST(root.right, val);\n        return root;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* insertIntoBST(TreeNode* root, int val) {\n        if (!root) return new TreeNode(val);\n        if (val < root->val) root->left = insertIntoBST(root->left, val);\n        else root->right = insertIntoBST(root->right, val);\n        return root;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bst-validation",
        "name": "BST Validation",
        "subtitle": "Range Invariant [min, max]",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Validates if binary tree satisfies BST property using min and max bounds for each node.",
        "when_to_use": "Validate Binary Search Tree.",
        "how_to_identify": "Validate BST, check BST invariants.",
        "intuition": "Every node value must be strictly greater than lower_bound and strictly less than upper_bound.",
        "step_by_step": [
          "Recursive helper validate(node, min_val, max_val)",
          "Check node.val > min_val and node.val < max_val",
          "Recurse left with (min_val, node.val)",
          "Recurse right with (node.val, max_val)"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def isValidBST(root):\n    def validate(node, low, high):\n        if not node: return True\n        if not (low < node.val < high): return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root, float('-inf'), float('inf'))",
          "java": "public boolean isValidBST(TreeNode root) {\n    return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nprivate boolean validate(TreeNode node, long min, long max) {\n    if (node == null) return true;\n    if (node.val <= min || node.val >= max) return false;\n    return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n}",
          "cpp": "bool isValidBST(TreeNode* root) {\n    function<bool(TreeNode*, long, long)> validate = [&](TreeNode* node, long minV, long maxV) {\n        if (!node) return true;\n        if (node->val <= minV || node->val >= maxV) return false;\n        return validate(node->left, minV, node->val) && validate(node->right, node->val, maxV);\n    };\n    return validate(root, LONG_MIN, LONG_MAX);\n}"
        },
        "questions": [
          {
            "id": "q-validate-binary-search-tree",
            "title": "Validate Binary Search Tree",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/validate-binary-search-tree/",
            "statement": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
            "examples": [
              {
                "input": "root = [2,1,3]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 10^4"
            ],
            "approach": "Recursive DFS maintaining strict min/max value bounds.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        def validate(node, low, high):\n            if not node: return True\n            if not (low < node.val < high): return False\n            return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n        return validate(root, float('-inf'), float('inf'))",
              "java": "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    private boolean validate(TreeNode node, long min, long max) {\n        if (node == null) return true;\n        if (node.val <= min || node.val >= max) return false;\n        return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        function<bool(TreeNode*, long, long)> validate = [&](TreeNode* node, long minV, long maxV) {\n            if (!node) return true;\n            if (node->val <= minV || node->val >= maxV) return false;\n            return validate(node->left, minV, node->val) && validate(node->right, node->val, maxV);\n        };\n        return validate(root, LONG_MIN, LONG_MAX);\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bst-lca",
        "name": "LCA in BST",
        "subtitle": "Split Point Detection",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Finds LCA in BST by traversing down until p and q split on opposite sides of current node.",
        "when_to_use": "Lowest Common Ancestor of a Binary Search Tree.",
        "how_to_identify": "LCA in BST.",
        "intuition": "If both p and q values < root.val, LCA is in left subtree. If both > root.val, LCA is in right subtree. Otherwise root is LCA.",
        "step_by_step": [
          "While root is non-null:",
          "If p.val < root.val and q.val < root.val, root = root.left",
          "If p.val > root.val and q.val > root.val, root = root.right",
          "Else return root"
        ],
        "time_complexity": "O(H)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def lowestCommonAncestorBST(root, p, q):\n    while root:\n        if p.val < root.val and q.val < root.val: root = root.left\n        elif p.val > root.val and q.val > root.val: root = root.right\n        else: return root\n    return None",
          "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    while (root != null) {\n        if (p.val < root.val && q.val < root.val) root = root.left;\n        else if (p.val > root.val && q.val > root.val) root = root.right;\n        else return root;\n    }\n    return null;\n}",
          "cpp": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    while (root) {\n        if (p->val < root->val && q->val < root->val) root = root->left;\n        else if (p->val > root->val && q->val > root->val) root = root->right;\n        else return root;\n    }\n    return NULL;\n}"
        },
        "questions": [
          {
            "id": "q-lowest-common-ancestor-bst",
            "title": "Lowest Common Ancestor of a Binary Search Tree",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            "statement": "Find the lowest common ancestor (LCA) node of two given nodes p and q in the BST.",
            "examples": [
              {
                "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
                "output": "6"
              }
            ],
            "constraints": [
              "2 <= Number of nodes <= 10^5"
            ],
            "approach": "Iterative split traversal using BST property.",
            "complexity": "Time: O(H), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        while root:\n            if p.val < root.val and q.val < root.val: root = root.left\n            elif p.val > root.val and q.val > root.val: root = root.right\n            else: return root",
              "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        while (root != null) {\n            if (p.val < root.val && q.val < root.val) root = root.left;\n            else if (p.val > root.val && q.val > root.val) root = root.right;\n            else return root;\n        }\n        return null;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        while (root) {\n            if (p->val < root->val && q->val < root->val) root = root->left;\n            else if (p->val > root->val && q->val > root->val) root = root->right;\n            else return root;\n        }\n        return NULL;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bst-inorder-kth",
        "name": "Kth Smallest / Inorder Traversal",
        "subtitle": "Sorted Traversal & Iterator",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Inorder traversal of BST yields strictly sorted values.",
        "when_to_use": "Kth Smallest Element in a BST, BST Iterator.",
        "how_to_identify": "Kth smallest in BST, BST iterator in O(1) avg.",
        "intuition": "Inorder traversal processes elements in sorted ascending order. Stop at Kth visited element.",
        "step_by_step": [
          "Inorder traversal left, root, right",
          "Decrement K when visiting node",
          "Return node value when K reaches 0"
        ],
        "time_complexity": "O(H + K)",
        "space_complexity": "O(H)",
        "code_snippets": {
          "python": "def kthSmallest(root, k):\n    st = []\n    while True:\n        while root: st.append(root); root = root.left\n        root = st.pop()\n        k -= 1\n        if k == 0: return root.val\n        root = root.right",
          "java": "public int kthSmallest(TreeNode root, int k) {\n    Stack<TreeNode> st = new Stack<>();\n    while (true) {\n        while (root != null) { st.push(root); root = root.left; }\n        root = st.pop();\n        if (--k == 0) return root.val;\n        root = root.right;\n    }\n}",
          "cpp": "int kthSmallest(TreeNode* root, int k) {\n    stack<TreeNode*> st;\n    while (true) {\n        while (root) { st.push(root); root = root->left; }\n        root = st.top(); st.pop();\n        if (--k == 0) return root->val;\n        root = root->right;\n    }\n}"
        },
        "questions": [
          {
            "id": "q-kth-smallest-element-in-a-bst",
            "title": "Kth Smallest Element in a BST",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "statement": "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
            "examples": [
              {
                "input": "root = [3,1,4,null,2], k = 1",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= k <= Number of nodes <= 10^4"
            ],
            "approach": "Iterative Inorder traversal with stack.",
            "complexity": "Time: O(H + K), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        st = []\n        while True:\n            while root: st.append(root); root = root.left\n            root = st.pop()\n            k -= 1\n            if k == 0: return root.val\n            root = root.right",
              "java": "class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        Stack<TreeNode> st = new Stack<>();\n        while (true) {\n            while (root != null) { st.push(root); root = root.left; }\n            root = st.pop();\n            if (--k == 0) return root.val;\n            root = root.right;\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        stack<TreeNode*> st;\n        while (true) {\n            while (root) { st.push(root); root = root->left; }\n            root = st.top(); st.pop();\n            if (--k == 0) return root->val;\n            root = root->right;\n        }\n    }\n};"
            }
          },
          {
            "id": "q-bst-iterator",
            "title": "BST Iterator",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/binary-search-tree-iterator/",
            "statement": "Implement the BSTIterator class that represents an in-order iterator over a binary search tree.",
            "examples": [
              {
                "input": "next(), next(), hasNext(), next(), hasNext()",
                "output": "3, 7, true, 9, true"
              }
            ],
            "constraints": [
              "1 <= Number of nodes <= 10^5"
            ],
            "approach": "Stack controlled inorder traversal.",
            "complexity": "Time: O(1) avg next(), Space: O(H)",
            "code": {
              "python": "class BSTIterator:\n    def __init__(self, root: Optional[TreeNode]):\n        self.st = []\n        self._push_all(root)\n    def _push_all(self, node):\n        while node:\n            self.st.append(node)\n            node = node.left\n    def next(self) -> int:\n        top_node = self.st.pop()\n        self._push_all(top_node.right)\n        return top_node.val\n    def hasNext(self) -> bool:\n        return len(self.st) > 0",
              "java": "class BSTIterator {\n    Stack<TreeNode> st = new Stack<>();\n    public BSTIterator(TreeNode root) { pushAll(root); }\n    private void pushAll(TreeNode node) {\n        while (node != null) { st.push(node); node = node.left; }\n    }\n    public int next() {\n        TreeNode topNode = st.pop();\n        pushAll(topNode.right);\n        return topNode.val;\n    }\n    public boolean hasNext() { return !st.isEmpty(); }\n}",
              "cpp": "class BSTIterator {\n    stack<TreeNode*> st;\n    void pushAll(TreeNode* node) {\n        while (node) { st.push(node); node = node->left; }\n    }\npublic:\n    BSTIterator(TreeNode* root) { pushAll(root); }\n    int next() {\n        TreeNode* topNode = st.top(); st.pop();\n        pushAll(topNode->right);\n        return topNode->val;\n    }\n    bool hasNext() { return !st.empty(); }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bst-conversion",
        "name": "BST Conversion & Balancing",
        "subtitle": "Sorted Array to Height-Balanced BST",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Converts sorted array into height-balanced BST by selecting middle element as root.",
        "when_to_use": "Convert Sorted Array to Binary Search Tree, Delete Node in a BST.",
        "how_to_identify": "Convert sorted array to BST, delete node in BST.",
        "intuition": "Middle element of sorted array partitions array into left and right subtrees of equal size.",
        "step_by_step": [
          "Mid = (low + high) / 2",
          "Root = TreeNode(nums[mid])",
          "Root.left = convert(low, mid - 1)",
          "Root.right = convert(mid + 1, high)"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(log N)",
        "code_snippets": {
          "python": "def sortedArrayToBST(nums):\n    if not nums: return None\n    mid = len(nums) // 2\n    root = TreeNode(nums[mid])\n    root.left = sortedArrayToBST(nums[:mid])\n    root.right = sortedArrayToBST(nums[mid+1:])\n    return root",
          "java": "public TreeNode sortedArrayToBST(int[] nums) {\n    return helper(nums, 0, nums.length - 1);\n}\nprivate TreeNode helper(int[] nums, int l, int r) {\n    if (l > r) return null;\n    int m = l + (r - l) / 2;\n    TreeNode root = new TreeNode(nums[m]);\n    root.left = helper(nums, l, m - 1);\n    root.right = helper(nums, m + 1, r);\n    return root;\n}",
          "cpp": "TreeNode* sortedArrayToBST(vector<int>& nums) {\n    function<TreeNode*(int,int)> helper = [&](int l, int r) -> TreeNode* {\n        if (l > r) return NULL;\n        int m = l + (r - l) / 2;\n        TreeNode* root = new TreeNode(nums[m]);\n        root->left = helper(l, m - 1);\n        root->right = helper(m + 1, r);\n        return root;\n    };\n    return helper(0, nums.size() - 1);\n}"
        },
        "questions": [
          {
            "id": "q-convert-sorted-array-to-bst",
            "title": "Convert Sorted Array to Binary Search Tree",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
            "statement": "Given an integer array nums where elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
            "examples": [
              {
                "input": "nums = [-10,-3,0,5,9]",
                "output": "[0,-3,9,-10,null,5]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Divide & Conquer pick middle element as root.",
            "complexity": "Time: O(N), Space: O(log N)",
            "code": {
              "python": "class Solution:\n    def sortedArrayToBST(self, nums: list[int]) -> Optional[TreeNode]:\n        if not nums: return None\n        mid = len(nums) // 2\n        root = TreeNode(nums[mid])\n        root.left = self.sortedArrayToBST(nums[:mid])\n        root.right = self.sortedArrayToBST(nums[mid+1:])\n        return root",
              "java": "class Solution {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        return helper(nums, 0, nums.length - 1);\n    }\n    private TreeNode helper(int[] nums, int l, int r) {\n        if (l > r) return null;\n        int m = l + (r - l) / 2;\n        TreeNode root = new TreeNode(nums[m]);\n        root.left = helper(nums, l, m - 1);\n        root.right = helper(nums, m + 1, r);\n        return root;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        function<TreeNode*(int,int)> helper = [&](int l, int r) -> TreeNode* {\n            if (l > r) return NULL;\n            int m = l + (r - l) / 2;\n            TreeNode* root = new TreeNode(nums[m]);\n            root->left = helper(l, m - 1);\n            root->right = helper(m + 1, r);\n            return root;\n        };\n        return helper(0, nums.size() - 1);\n    }\n};"
            }
          },
          {
            "id": "q-minimum-absolute-difference-in-bst",
            "title": "Minimum Absolute Difference in BST",
            "difficulty": "Easy",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
            "statement": "Return minimum absolute difference between values of any two different nodes in BST.",
            "examples": [
              {
                "input": "root = [4,2,6,1,3]",
                "output": "1"
              }
            ],
            "constraints": [
              "2 <= Tree nodes <= 10^4"
            ],
            "approach": "Inorder traversal tracking previous node value.",
            "complexity": "Time: O(N), Space: O(H)",
            "code": {
              "python": "class Solution:\n    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:\n        prev = None; min_d = float('inf')\n        def inorder(node):\n            nonlocal prev, min_d\n            if not node: return\n            inorder(node.left)\n            if prev is not None: min_d = min(min_d, node.val - prev)\n            prev = node.val\n            inorder(node.right)\n        inorder(root)\n        return min_d",
              "java": "class Solution {\n    private Integer prev = null; private int minD = Integer.MAX_VALUE;\n    public int getMinimumDifference(TreeNode root) {\n        inorder(root); return minD;\n    }\n    private void inorder(TreeNode node) {\n        if (node == null) return;\n        inorder(node.left);\n        if (prev != null) minD = Math.min(minD, node.val - prev);\n        prev = node.val;\n        inorder(node.right);\n    }\n}",
              "cpp": "class Solution {\n    int minD = INT_MAX, prev = -1;\npublic:\n    int getMinimumDifference(TreeNode* root) {\n        inorder(root); return minD;\n    }\n    void inorder(TreeNode* node) {\n        if (!node) return;\n        inorder(node->left);\n        if (prev != -1) minD = min(minD, node->val - prev);\n        prev = node->val;\n        inorder(node->right);\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-heap-priority-queue",
    "name": "Heap / Priority Queue",
    "description": "Master Min-Heap and Max-Heap for Top K elements, stream medians, and K-way merging.",
    "icon": "TrendingUp",
    "total_patterns": 3,
    "total_problems": 5,
    "patterns": [
      {
        "id": "pattern-top-k-elements",
        "name": "Top K Elements",
        "subtitle": "Min Heap Size K",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Maintains Min-Heap of size K to find top K largest elements in O(N log K) time.",
        "when_to_use": "Kth Largest Element in an Array, K Closest Points to Origin.",
        "how_to_identify": "Top K largest/smallest elements, K closest items.",
        "intuition": "Instead of full sorting O(N log N), maintain Min-Heap of size K. When heap size exceeds K, pop smallest.",
        "step_by_step": [
          "Iterate elements",
          "Push element to Min-Heap",
          "If heap size > K, pop min element",
          "Heap top is Kth largest"
        ],
        "time_complexity": "O(N log K)",
        "space_complexity": "O(K)",
        "code_snippets": {
          "python": "def findKthLargest(nums, k):\n    heap = nums[:k]\n    heapq.heapify(heap)\n    for x in nums[k:]:\n        if x > heap[0]:\n            heapq.heapreplace(heap, x)\n    return heap[0]",
          "java": "public int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\n    for (int x : nums) {\n        pq.add(x);\n        if (pq.size() > k) pq.poll();\n    }\n    return pq.peek();\n}",
          "cpp": "int findKthLargest(vector<int>& nums, int k) {\n    priority_queue<int, vector<int>, greater<int>> pq;\n    for (int x : nums) {\n        pq.push(x);\n        if (pq.size() > k) pq.pop();\n    }\n    return pq.top();\n}"
        },
        "questions": [
          {
            "id": "q-kth-largest-element-in-an-array",
            "title": "Kth Largest Element in an Array",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            "statement": "Given an integer array nums and an integer k, return the kth largest element in the array.",
            "examples": [
              {
                "input": "nums = [3,2,1,5,6,4], k = 2",
                "output": "5"
              }
            ],
            "constraints": [
              "1 <= k <= nums.length <= 10^5"
            ],
            "approach": "Min-Heap of size K.",
            "complexity": "Time: O(N log K), Space: O(K)",
            "code": {
              "python": "class Solution:\n    def findKthLargest(self, nums: list[int], k: int) -> int:\n        heap = nums[:k]\n        heapq.heapify(heap)\n        for x in nums[k:]:\n            if x > heap[0]: heapq.heapreplace(heap, x)\n        return heap[0]",
              "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int x : nums) {\n            pq.add(x);\n            if (pq.size() > k) pq.poll();\n        }\n        return pq.peek();\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        priority_queue<int, vector<int>, greater<int>> pq;\n        for (int x : nums) {\n            pq.push(x);\n            if (pq.size() > k) pq.pop();\n        }\n        return pq.top();\n    }\n};"
            }
          },
          {
            "id": "q-k-closest-points-to-origin",
            "title": "K Closest Points to Origin",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/k-closest-points-to-origin/",
            "statement": "Given an array of points where points[i] = [xi, yi], return the k closest points to the origin (0, 0).",
            "examples": [
              {
                "input": "points = [[1,3],[-2,2]], k = 1",
                "output": "[[-2,2]]"
              }
            ],
            "constraints": [
              "1 <= k <= points.length <= 10^4"
            ],
            "approach": "Max-Heap of size K based on Euclidean distance.",
            "complexity": "Time: O(N log K), Space: O(K)",
            "code": {
              "python": "class Solution:\n    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:\n        return heapq.nsmallest(k, points, key=lambda p: p[0]**2 + p[1]**2)",
              "java": "class Solution {\n    public int[][] kClosest(int[][] points, int k) {\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare((b[0]*b[0] + b[1]*b[1]), (a[0]*a[0] + a[1]*a[1])));\n        for (int[] p : points) {\n            pq.add(p);\n            if (pq.size() > k) pq.poll();\n        }\n        return pq.toArray(new int[k][]);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n        auto cmp = [](const vector<int>& a, const vector<int>& b) { return a[0]*a[0] + a[1]*a[1] < b[0]*b[0] + b[1]*b[1]; };\n        priority_queue<vector<int>, vector<vector<int>>, decltype(cmp)> pq(cmp);\n        for (auto& p : points) {\n            pq.push(p);\n            if (pq.size() > k) pq.pop();\n        }\n        vector<vector<int>> res;\n        while (!pq.empty()) { res.push_back(pq.top()); pq.pop(); }\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-two-heaps",
        "name": "Two Heaps",
        "subtitle": "Stream Median Balance",
        "difficulty": "Hard",
        "total_problems": 1,
        "what": "Maintains Max-Heap for lower half and Min-Heap for upper half to query stream median in O(1).",
        "when_to_use": "Find Median from Data Stream.",
        "how_to_identify": "Running median of stream.",
        "intuition": "Lower half values in Max-Heap (max_heap.top is median candidate), upper half in Min-Heap.",
        "step_by_step": [
          "Add number to max_heap",
          "Balance by pushing max_heap.pop() to min_heap",
          "If min_heap size > max_heap size, move top back to max_heap"
        ],
        "time_complexity": "O(log N) insert, O(1) median query",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "class MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap\n        self.large = [] # Min-heap\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large): return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
          "java": "class MedianFinder {\n    PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());\n    PriorityQueue<Integer> large = new PriorityQueue<>();\n    public void addNum(int num) {\n        small.add(num);\n        large.add(small.poll());\n        if (large.size() > small.size()) small.add(large.poll());\n    }\n    public double findMedian() {\n        return small.size() > large.size() ? small.peek() : (small.peek() + large.peek()) / 2.0;\n    }\n}",
          "cpp": "class MedianFinder {\n    priority_queue<int> small;\n    priority_queue<int, vector<int>, greater<int>> large;\npublic:\n    void addNum(int num) {\n        small.push(num);\n        large.push(small.top()); small.pop();\n        if (large.size() > small.size()) { small.push(large.top()); large.pop(); }\n    }\n    double findMedian() {\n        return small.size() > large.size() ? small.top() : (small.top() + large.top()) / 2.0;\n    }\n};"
        },
        "questions": [
          {
            "id": "q-find-median-from-data-stream",
            "title": "Find Median from Data Stream",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/find-median-from-data-stream/",
            "statement": "Design a data structure that supports adding numbers from a data stream and finding the median of all elements.",
            "examples": [
              {
                "input": "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
                "output": "1.5, 2.0"
              }
            ],
            "constraints": [
              "-10^5 <= num <= 10^5"
            ],
            "approach": "Two heaps (Max-Heap small, Min-Heap large).",
            "complexity": "Time: O(log N) add, O(1) find, Space: O(N)",
            "code": {
              "python": "class MedianFinder:\n    def __init__(self):\n        self.small = []\n        self.large = []\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large): return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
              "java": "class MedianFinder {\n    PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());\n    PriorityQueue<Integer> large = new PriorityQueue<>();\n    public void addNum(int num) {\n        small.add(num);\n        large.add(small.poll());\n        if (large.size() > small.size()) small.add(large.poll());\n    }\n    public double findMedian() {\n        return small.size() > large.size() ? small.peek() : (small.peek() + large.peek()) / 2.0;\n    }\n}",
              "cpp": "class MedianFinder {\n    priority_queue<int> small;\n    priority_queue<int, vector<int>, greater<int>> large;\npublic:\n    void addNum(int num) {\n        small.push(num);\n        large.push(small.top()); small.pop();\n        if (large.size() > small.size()) { small.push(large.top()); large.pop(); }\n    }\n    double findMedian() {\n        return small.size() > large.size() ? small.top() : (small.top() + large.top()) / 2.0;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-task-scheduling-heap",
        "name": "Task & Frequency Scheduling",
        "subtitle": "Greedy Frequency Placement",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Uses Max-Heap with cooldown queue to schedule high-frequency tasks first.",
        "when_to_use": "Task Scheduler, Reorganize String.",
        "how_to_identify": "Task CPU scheduling with cooldown, string reorganization.",
        "intuition": "Always pick highest remaining frequency task from Max-Heap. Push to cooldown queue with available time.",
        "step_by_step": [
          "Build Max-Heap of frequencies",
          "Pop top frequency task",
          "Put on cooldown queue until interval expires"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(26)",
        "code_snippets": {
          "python": "def leastInterval(tasks, n):\n    counts = Counter(tasks)\n    max_f = max(counts.values())\n    count_max_f = list(counts.values()).count(max_f)\n    return max(len(tasks), (max_f - 1) * (n + 1) + count_max_f)",
          "java": "public int leastInterval(char[] tasks, int n) {\n    int[] count = new int[26];\n    for (char c : tasks) count[c - 'A']++;\n    Arrays.sort(count);\n    int maxF = count[25];\n    int countMaxF = 0;\n    for (int c : count) if (c == maxF) countMaxF++;\n    return Math.max(tasks.length, (maxF - 1) * (n + 1) + countMaxF);\n}",
          "cpp": "int leastInterval(vector<char>& tasks, int n) {\n    vector<int> count(26, 0);\n    for (char c : tasks) count[c - 'A']++;\n    int maxF = *max_element(count.begin(), count.end());\n    int countMaxF = 0;\n    for (int c : count) if (c == maxF) countMaxF++;\n    return max((int)tasks.size(), (maxF - 1) * (n + 1) + countMaxF);\n}"
        },
        "questions": [
          {
            "id": "q-task-scheduler",
            "title": "Task Scheduler",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/task-scheduler/",
            "statement": "Return the least number of units of times that the CPU will take to finish all the given tasks with cooling interval n.",
            "examples": [
              {
                "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
                "output": "8"
              }
            ],
            "constraints": [
              "1 <= tasks.length <= 10^4"
            ],
            "approach": "Greedy frequency formula: max(len(tasks), (max_freq - 1) * (n + 1) + max_freq_count).",
            "complexity": "Time: O(N), Space: O(26)",
            "code": {
              "python": "class Solution:\n    def leastInterval(self, tasks: list[str], n: int) -> int:\n        counts = Counter(tasks)\n        max_f = max(counts.values())\n        count_max_f = list(counts.values()).count(max_f)\n        return max(len(tasks), (max_f - 1) * (n + 1) + count_max_f)",
              "java": "class Solution {\n    public int leastInterval(char[] tasks, int n) {\n        int[] count = new int[26];\n        for (char c : tasks) count[c - 'A']++;\n        Arrays.sort(count);\n        int maxF = count[25];\n        int countMaxF = 0;\n        for (int c : count) if (c == maxF) countMaxF++;\n        return Math.max(tasks.length, (maxF - 1) * (n + 1) + countMaxF);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int leastInterval(vector<char>& tasks, int n) {\n        vector<int> count(26, 0);\n        for (char c : tasks) count[c - 'A']++;\n        int maxF = *max_element(count.begin(), count.end());\n        int countMaxF = 0;\n        for (int c : count) if (c == maxF) countMaxF++;\n        return max((int)tasks.size(), (maxF - 1) * (n + 1) + countMaxF);\n    }\n};"
            }
          },
          {
            "id": "q-reorganize-string",
            "title": "Reorganize String",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/reorganize-string/",
            "statement": "Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.",
            "examples": [
              {
                "input": "s = \"aab\"",
                "output": "\"aba\""
              }
            ],
            "constraints": [
              "1 <= s.length <= 500"
            ],
            "approach": "Max-Heap of character frequencies popping top 2 distinct characters per step.",
            "complexity": "Time: O(N log 26), Space: O(26)",
            "code": {
              "python": "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        counts = Counter(s)\n        max_heap = [[-cnt, char] for char, cnt in counts.items()]\n        heapq.heapify(max_heap)\n        prev = None; res = []\n        while max_heap or prev:\n            if prev and not max_heap: return \"\"\n            cnt, char = heapq.heappop(max_heap)\n            res.append(char); cnt += 1\n            if prev: heapq.heappush(max_heap, prev); prev = None\n            if cnt < 0: prev = [cnt, char]\n        return \"\".join(res)",
              "java": "class Solution {\n    public String reorganizeString(String s) {\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) count[c - 'a']++;\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(b[1], a[1]));\n        for (int i = 0; i < 26; i++) if (count[i] > 0) pq.add(new int[]{i, count[i]});\n        StringBuilder sb = new StringBuilder();\n        int[] prev = null;\n        while (!pq.isEmpty() || prev != null) {\n            if (prev != null && pq.isEmpty()) return \"\";\n            int[] curr = pq.poll();\n            sb.append((char)(curr[0] + 'a')); curr[1]--;\n            if (prev != null) { pq.add(prev); prev = null; }\n            if (curr[1] > 0) prev = curr;\n        }\n        return sb.toString();\n    }\n}",
              "cpp": "class Solution {\npublic:\n    string reorganizeString(string s) {\n        vector<int> count(26, 0);\n        for (char c : s) count[c - 'a']++;\n        priority_queue<pair<int, char>> pq;\n        for (int i = 0; i < 26; i++) if (count[i] > 0) pq.push({count[i], 'a' + i});\n        string res = \"\"; pair<int, char> prev = {-1, '#'};\n        while (!pq.empty() || prev.first > 0) {\n            if (prev.first > 0 && pq.empty()) return \"\";\n            auto curr = pq.top(); pq.pop();\n            res += curr.second; curr.first--;\n            if (prev.first > 0) { pq.push(prev); prev = {-1, '#'}; }\n            if (curr.first > 0) prev = curr;\n        }\n        return res;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-graphs",
    "name": "Graphs",
    "description": "Master BFS/DFS traversals, connected components, cycle detection, topological sort (Kahn's), Dijkstra shortest path, and Disjoint Set (Union-Find).",
    "icon": "Share2",
    "total_patterns": 5,
    "total_problems": 9,
    "patterns": [
      {
        "id": "pattern-graph-bfs-shortest-path",
        "name": "Graph BFS Shortest Path",
        "subtitle": "Unweighted Shortest Path",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 2,
        "what": "Uses BFS queue to find shortest path distance in unweighted grid graphs or state transition spaces.",
        "when_to_use": "Shortest Path in Binary Matrix, Word Ladder.",
        "how_to_identify": "Shortest path in unweighted grid, minimum transformation steps.",
        "intuition": "BFS processes graph nodes in concentric distance layers. The first time target is popped, distance is minimum.",
        "step_by_step": [
          "Enqueue start node with distance 0/1",
          "While queue non-empty, pop curr node",
          "If curr == target, return distance",
          "Enqueue valid unvisited neighbors with distance + 1"
        ],
        "time_complexity": "O(V + E)",
        "space_complexity": "O(V)",
        "code_snippets": {
          "python": "def shortestPathBinaryMatrix(grid):\n    n = len(grid)\n    if grid[0][0] or grid[n-1][n-1]: return -1\n    q = deque([(0, 0, 1)])\n    grid[0][0] = 1\n    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]\n    while q:\n        r, c, d = q.popleft()\n        if r == n - 1 and c == n - 1: return d\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:\n                grid[nr][nc] = 1\n                q.append((nr, nc, d + 1))\n    return -1",
          "java": "public int shortestPathBinaryMatrix(int[][] grid) {\n    int n = grid.length;\n    if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;\n    Queue<int[]> q = new LinkedList<>(); q.add(new int[]{0, 0, 1});\n    grid[0][0] = 1;\n    int[][] dirs = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};\n    while (!q.isEmpty()) {\n        int[] curr = q.poll();\n        if (curr[0] == n - 1 && curr[1] == n - 1) return curr[2];\n        for (int[] d : dirs) {\n            int nr = curr[0] + d[0], nc = curr[1] + d[1];\n            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {\n                grid[nr][nc] = 1;\n                q.add(new int[]{nr, nc, curr[2] + 1});\n            }\n        }\n    }\n    return -1;\n}",
          "cpp": "int shortestPathBinaryMatrix(vector<vector<int>>& grid) {\n    int n = grid.size();\n    if (grid[0][0] || grid[n-1][n-1]) return -1;\n    queue<vector<int>> q; q.push({0, 0, 1});\n    grid[0][0] = 1;\n    int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};\n    while (!q.empty()) {\n        auto curr = q.front(); q.pop();\n        if (curr[0] == n - 1 && curr[1] == n - 1) return curr[2];\n        for (auto& d : dirs) {\n            int nr = curr[0] + d[0], nc = curr[1] + d[1];\n            if (nr >= 0 && nr < n && nc >= 0 && nc < n && !grid[nr][nc]) {\n                grid[nr][nc] = 1;\n                q.push({nr, nc, curr[2] + 1});\n            }\n        }\n    }\n    return -1;\n}"
        },
        "questions": [
          {
            "id": "q-shortest-path-binary-matrix",
            "title": "Shortest Path in Binary Matrix",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
            "statement": "Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.",
            "examples": [
              {
                "input": "grid = [[0,1],[1,0]]",
                "output": "2"
              }
            ],
            "constraints": [
              "n == grid.length == grid[i].length",
              "1 <= n <= 100"
            ],
            "approach": "8-directional BFS queue starting at (0, 0).",
            "complexity": "Time: O(N^2), Space: O(N^2)",
            "code": {
              "python": "class Solution:\n    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:\n        n = len(grid)\n        if grid[0][0] or grid[n-1][n-1]: return -1\n        q = deque([(0, 0, 1)])\n        grid[0][0] = 1\n        dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]\n        while q:\n            r, c, d = q.popleft()\n            if r == n - 1 and c == n - 1: return d\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:\n                    grid[nr][nc] = 1; q.append((nr, nc, d + 1))\n        return -1",
              "java": "class Solution {\n    public int shortestPathBinaryMatrix(int[][] grid) {\n        int n = grid.length;\n        if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;\n        Queue<int[]> q = new LinkedList<>(); q.add(new int[]{0, 0, 1});\n        grid[0][0] = 1;\n        int[][] dirs = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};\n        while (!q.isEmpty()) {\n            int[] curr = q.poll();\n            if (curr[0] == n - 1 && curr[1] == n - 1) return curr[2];\n            for (int[] d : dirs) {\n                int nr = curr[0] + d[0], nc = curr[1] + d[1];\n                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {\n                    grid[nr][nc] = 1; q.add(new int[]{nr, nc, curr[2] + 1});\n                }\n            }\n        }\n        return -1;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {\n        int n = grid.size();\n        if (grid[0][0] || grid[n-1][n-1]) return -1;\n        queue<vector<int>> q; q.push({0, 0, 1});\n        grid[0][0] = 1;\n        int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};\n        while (!q.empty()) {\n            auto curr = q.front(); q.pop();\n            if (curr[0] == n - 1 && curr[1] == n - 1) return curr[2];\n            for (auto& d : dirs) {\n                int nr = curr[0] + d[0], nc = curr[1] + d[1];\n                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !grid[nr][nc]) {\n                    grid[nr][nc] = 1; q.push({nr, nc, curr[2] + 1});\n                }\n            }\n        }\n        return -1;\n    }\n};"
            }
          },
          {
            "id": "q-word-ladder",
            "title": "Word Ladder",
            "difficulty": "Hard",
            "estimated_minutes": 30,
            "leetcode_url": "https://leetcode.com/problems/word-ladder/",
            "statement": "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence.",
            "examples": [
              {
                "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
                "output": "5"
              }
            ],
            "constraints": [
              "1 <= beginWord.length <= 10"
            ],
            "approach": "BFS level order replacing single character to hit word set matches.",
            "complexity": "Time: O(N * M^2), Space: O(N * M)",
            "code": {
              "python": "class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:\n        words = set(wordList)\n        if endWord not in words: return 0\n        q = deque([(beginWord, 1)])\n        while q:\n            word, steps = q.popleft()\n            if word == endWord: return steps\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    nxt = word[:i] + c + word[i+1:]\n                    if nxt in words:\n                        words.remove(nxt); q.append((nxt, steps + 1))\n        return 0",
              "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        Set<String> words = new HashSet<>(wordList);\n        if (!words.contains(endWord)) return 0;\n        Queue<String> q = new LinkedList<>(); q.add(beginWord);\n        int steps = 1;\n        while (!q.isEmpty()) {\n            int sz = q.size(); steps++;\n            for (int k = 0; k < sz; k++) {\n                char[] arr = q.poll().toCharArray();\n                for (int i = 0; i < arr.length; i++) {\n                    char orig = arr[i];\n                    for (char c = 'a'; c <= 'z'; c++) {\n                        arr[i] = c;\n                        String nxt = String.valueOf(arr);\n                        if (nxt.equals(endWord)) return steps;\n                        if (words.remove(nxt)) q.add(nxt);\n                    }\n                    arr[i] = orig;\n                }\n            }\n        }\n        return 0;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        unordered_set<string> words(wordList.begin(), wordList.end());\n        if (!words.count(endWord)) return 0;\n        queue<pair<string, int>> q; q.push({beginWord, 1});\n        while (!q.empty()) {\n            auto [word, steps] = q.front(); q.pop();\n            if (word == endWord) return steps;\n            for (int i = 0; i < word.length(); i++) {\n                char orig = word[i];\n                for (char c = 'a'; c <= 'z'; c++) {\n                    word[i] = c;\n                    if (words.count(word)) {\n                        words.erase(word); q.push({word, steps + 1});\n                    }\n                }\n                word[i] = orig;\n            }\n        }\n        return 0;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-graph-dfs-islands",
        "name": "Grid DFS & Connected Components",
        "subtitle": "Island Traversals",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Explores grid graphs or adjacency lists recursively using DFS to count connected components or max component area.",
        "when_to_use": "Number of Islands, Max Area of Island, Clone Graph.",
        "how_to_identify": "Grid island count, connected component area.",
        "intuition": "When encountering unvisited land '1', increment island count and fire DFS to flood-fill visit all connected land cells.",
        "step_by_step": [
          "Iterate grid cell (r, c)",
          "If grid[r][c] == '1', island_count++, call dfs(r, c)",
          "dfs sets grid[r][c] = '0' and recursively visits 4-directional neighbors"
        ],
        "time_complexity": "O(M * N)",
        "space_complexity": "O(M * N)",
        "code_snippets": {
          "python": "def numIslands(grid):\n    if not grid: return 0\n    r, c = len(grid), len(grid[0]); count = 0\n    def dfs(i, j):\n        if i < 0 or i >= r or j < 0 or j >= c or grid[i][j] != '1': return\n        grid[i][j] = '0'\n        dfs(i+1, j); dfs(i-1, j); dfs(i, j+1); dfs(i, j-1)\n    for i in range(r):\n        for j in range(c):\n            if grid[i][j] == '1': count += 1; dfs(i, j)\n    return count",
          "java": "public int numIslands(char[][] grid) {\n    if (grid == null || grid.length == 0) return 0;\n    int r = grid.length, c = grid[0].length, count = 0;\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++) {\n            if (grid[i][j] == '1') { count++; dfs(grid, i, j); }\n        }\n    }\n    return count;\n}\nprivate void dfs(char[][] grid, int i, int j) {\n    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1') return;\n    grid[i][j] = '0';\n    dfs(grid, i + 1, j); dfs(grid, i - 1, j); dfs(grid, i, j + 1); dfs(grid, i, j - 1);\n}",
          "cpp": "int numIslands(vector<vector<char>>& grid) {\n    if (grid.empty()) return 0;\n    int r = grid.size(), c = grid[0].size(), count = 0;\n    function<void(int,int)> dfs = [&](int i, int j) {\n        if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] != '1') return;\n        grid[i][j] = '0';\n        dfs(i + 1, j); dfs(i - 1, j); dfs(i, j + 1); dfs(i, j - 1);\n    };\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++) {\n            if (grid[i][j] == '1') { count++; dfs(i, j); }\n        }\n    }\n    return count;\n}"
        },
        "questions": [
          {
            "id": "q-number-of-islands",
            "title": "Number of Islands",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/number-of-islands/",
            "statement": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
            "examples": [
              {
                "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
                "output": "1"
              }
            ],
            "constraints": [
              "m == grid.length, n == grid[i].length"
            ],
            "approach": "Grid DFS flood fill.",
            "complexity": "Time: O(M * N), Space: O(M * N)",
            "code": {
              "python": "class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        if not grid: return 0\n        r, c = len(grid), len(grid[0]); count = 0\n        def dfs(i, j):\n            if i < 0 or i >= r or j < 0 or j >= c or grid[i][j] != '1': return\n            grid[i][j] = '0'\n            dfs(i+1, j); dfs(i-1, j); dfs(i, j+1); dfs(i, j-1)\n        for i in range(r):\n            for j in range(c):\n                if grid[i][j] == '1': count += 1; dfs(i, j)\n        return count",
              "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        int r = grid.length, c = grid[0].length, count = 0;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == '1') { count++; dfs(grid, i, j); }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] grid, int i, int j) {\n        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1') return;\n        grid[i][j] = '0';\n        dfs(grid, i + 1, j); dfs(grid, i - 1, j); dfs(grid, i, j + 1); dfs(grid, i, j - 1);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int r = grid.size(), c = grid[0].size(), count = 0;\n        function<void(int,int)> dfs = [&](int i, int j) {\n            if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] != '1') return;\n            grid[i][j] = '0';\n            dfs(i + 1, j); dfs(i - 1, j); dfs(i, j + 1); dfs(i, j - 1);\n        };\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == '1') { count++; dfs(i, j); }\n            }\n        }\n        return count;\n    }\n};"
            }
          },
          {
            "id": "q-max-area-of-island",
            "title": "Max Area of Island",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/max-area-of-island/",
            "statement": "Return the maximum area of an island in grid. If there is no island, return 0.",
            "examples": [
              {
                "input": "grid = [[0,0,1,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,1,1,0,0]]",
                "output": "4"
              }
            ],
            "constraints": [
              "m == grid.length, n == grid[i].length"
            ],
            "approach": "Grid DFS returning accumulated area count per island.",
            "complexity": "Time: O(M * N), Space: O(M * N)",
            "code": {
              "python": "class Solution:\n    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:\n        r, c = len(grid), len(grid[0]); max_a = 0\n        def dfs(i, j):\n            if i < 0 or i >= r or j < 0 or j >= c or grid[i][j] != 1: return 0\n            grid[i][j] = 0\n            return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1)\n        for i in range(r):\n            for j in range(c):\n                if grid[i][j] == 1: max_a = max(max_a, dfs(i, j))\n        return max_a",
              "java": "class Solution {\n    public int maxAreaOfIsland(int[][] grid) {\n        int r = grid.length, c = grid[0].length, maxA = 0;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == 1) maxA = Math.max(maxA, dfs(grid, i, j));\n            }\n        }\n        return maxA;\n    }\n    private int dfs(int[][] grid, int i, int j) {\n        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != 1) return 0;\n        grid[i][j] = 0;\n        return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxAreaOfIsland(vector<vector<int>>& grid) {\n        int r = grid.size(), c = grid[0].size(), maxA = 0;\n        function<int(int,int)> dfs = [&](int i, int j) -> int {\n            if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] != 1) return 0;\n            grid[i][j] = 0;\n            return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);\n        };\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (grid[i][j] == 1) maxA = max(maxA, dfs(i, j));\n            }\n        }\n        return maxA;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-topological-sort",
        "name": "Topological Sort (Kahn's)",
        "subtitle": "In-degree Queue & Cycle Detection",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 2,
        "what": "Sorts directed acyclic graph (DAG) nodes according to prerequisite dependencies.",
        "when_to_use": "Course Schedule, Course Schedule II.",
        "how_to_identify": "Course prerequisites, task dependency ordering.",
        "intuition": "Calculate in-degree (number of incoming edges) for each node. Enqueue nodes with in-degree 0.",
        "step_by_step": [
          "Build adjacency list and in-degree array",
          "Enqueue all nodes with in-degree == 0",
          "While queue non-empty, pop u, append u to order, decrement in-degree of u's neighbors",
          "If neighbor in-degree reaches 0, enqueue neighbor"
        ],
        "time_complexity": "O(V + E)",
        "space_complexity": "O(V + E)",
        "code_snippets": {
          "python": "def canFinish(numCourses, prerequisites):\n    indegree = [0] * numCourses\n    adj = defaultdict(list)\n    for u, v in prerequisites:\n        adj[v].append(u); indegree[u] += 1\n    q = deque([i for i in range(numCourses) if indegree[i] == 0])\n    visited = 0\n    while q:\n        curr = q.popleft(); visited += 1\n        for nxt in adj[curr]:\n            indegree[nxt] -= 1\n            if indegree[nxt] == 0: q.append(nxt)\n    return visited == numCourses",
          "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] indegree = new int[numCourses];\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); indegree[p[0]]++; }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.add(i);\n    int visited = 0;\n    while (!q.isEmpty()) {\n        int curr = q.poll(); visited++;\n        for (int nxt : adj.get(curr)) {\n            if (--indegree[nxt] == 0) q.add(nxt);\n        }\n    }\n    return visited == numCourses;\n}",
          "cpp": "bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n    vector<int> indegree(numCourses, 0);\n    vector<vector<int>> adj(numCourses);\n    for (auto& p : prerequisites) { adj[p[1]].push_back(p[0]); indegree[p[0]]++; }\n    queue<int> q;\n    for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.push(i);\n    int visited = 0;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop(); visited++;\n        for (int nxt : adj[curr]) {\n            if (--indegree[nxt] == 0) q.push(nxt);\n        }\n    }\n    return visited == numCourses;\n}"
        },
        "questions": [
          {
            "id": "q-course-schedule",
            "title": "Course Schedule",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/course-schedule/",
            "statement": "Return true if you can finish all courses given prerequisite dependencies.",
            "examples": [
              {
                "input": "numCourses = 2, prerequisites = [[1,0]]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= numCourses <= 2000"
            ],
            "approach": "Kahn's Topological Sort Algorithm using in-degree queue.",
            "complexity": "Time: O(V + E), Space: O(V + E)",
            "code": {
              "python": "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:\n        indegree = [0] * numCourses; adj = defaultdict(list)\n        for u, v in prerequisites: adj[v].append(u); indegree[u] += 1\n        q = deque([i for i in range(numCourses) if indegree[i] == 0]); visited = 0\n        while q:\n            curr = q.popleft(); visited += 1\n            for nxt in adj[curr]:\n                indegree[nxt] -= 1\n                if indegree[nxt] == 0: q.append(nxt)\n        return visited == numCourses",
              "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        int[] indegree = new int[numCourses];\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); indegree[p[0]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.add(i);\n        int visited = 0;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); visited++;\n            for (int nxt : adj.get(curr)) if (--indegree[nxt] == 0) q.add(nxt);\n        }\n        return visited == numCourses;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<int> indegree(numCourses, 0); vector<vector<int>> adj(numCourses);\n        for (auto& p : prerequisites) { adj[p[1]].push_back(p[0]); indegree[p[0]]++; }\n        queue<int> q;\n        for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.push(i);\n        int visited = 0;\n        while (!q.empty()) {\n            int curr = q.front(); q.pop(); visited++;\n            for (int nxt : adj[curr]) if (--indegree[nxt] == 0) q.push(nxt);\n        }\n        return visited == numCourses;\n    }\n};"
            }
          },
          {
            "id": "q-course-schedule-ii",
            "title": "Course Schedule II",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/course-schedule-ii/",
            "statement": "Return the ordering of courses you should take to finish all courses. If impossible, return an empty array.",
            "examples": [
              {
                "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
                "output": "[0,2,1,3]"
              }
            ],
            "constraints": [
              "1 <= numCourses <= 2000"
            ],
            "approach": "Topological Sort appending visited nodes to ordering list.",
            "complexity": "Time: O(V + E), Space: O(V + E)",
            "code": {
              "python": "class Solution:\n    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n        indegree = [0] * numCourses; adj = defaultdict(list)\n        for u, v in prerequisites: adj[v].append(u); indegree[u] += 1\n        q = deque([i for i in range(numCourses) if indegree[i] == 0]); res = []\n        while q:\n            curr = q.popleft(); res.append(curr)\n            for nxt in adj[curr]:\n                indegree[nxt] -= 1\n                if indegree[nxt] == 0: q.append(nxt)\n        return res if len(res) == numCourses else []",
              "java": "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        int[] indegree = new int[numCourses];\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); indegree[p[0]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.add(i);\n        int[] res = new int[numCourses]; int idx = 0;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); res[idx++] = curr;\n            for (int nxt : adj.get(curr)) if (--indegree[nxt] == 0) q.add(nxt);\n        }\n        return idx == numCourses ? res : new int[0];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<int> indegree(numCourses, 0); vector<vector<int>> adj(numCourses);\n        for (auto& p : prerequisites) { adj[p[1]].push_back(p[0]); indegree[p[0]]++; }\n        queue<int> q;\n        for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.push(i);\n        vector<int> res;\n        while (!q.empty()) {\n            int curr = q.front(); q.pop(); res.push_back(curr);\n            for (int nxt : adj[curr]) if (--indegree[nxt] == 0) q.push(nxt);\n        }\n        return res.size() == numCourses ? res : vector<int>();\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-dijkstra-algorithm",
        "name": "Dijkstra Algorithm",
        "subtitle": "Weighted Shortest Path",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 1,
        "what": "Uses Min-Heap priority queue to compute single-source shortest path in weighted non-negative edge graphs.",
        "when_to_use": "Network Delay Time, Path with Minimum Effort.",
        "how_to_identify": "Network latency, minimum cost/effort weighted path.",
        "intuition": "Maintains min-heap of (dist, node). Always relaxes edges from the node with smallest tentative distance.",
        "step_by_step": [
          "Initialize dist array with infinity, dist[source] = 0",
          "Push (0, source) into Min-Heap",
          "Pop node with min dist d. If d > dist[u], skip",
          "For neighbor v with weight w: if dist[u] + w < dist[v], update dist[v] and push"
        ],
        "time_complexity": "O((V + E) log V)",
        "space_complexity": "O(V + E)",
        "code_snippets": {
          "python": "def networkDelayTime(times, n, k):\n    adj = defaultdict(list)\n    for u, v, w in times: adj[u].append((v, w))\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[k] = 0; pq = [(0, k)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]: continue\n        for v, w in adj[u]:\n            if d + w < dist[v]:\n                dist[v] = d + w; heapq.heappush(pq, (dist[v], v))\n    res = max(dist.values())\n    return res if res != float('inf') else -1",
          "java": "public int networkDelayTime(int[][] times, int n, int k) {\n    Map<Integer, List<int[]>> adj = new HashMap<>();\n    for (int i = 1; i <= n; i++) adj.put(i, new ArrayList<>());\n    for (int[] t : times) adj.get(t[0]).add(new int[]{t[1], t[2]});\n    int[] dist = new int[n + 1]; Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[k] = 0;\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));\n    pq.add(new int[]{0, k});\n    while (!pq.isEmpty()) {\n        int[] curr = pq.poll(); int d = curr[0], u = curr[1];\n        if (d > dist[u]) continue;\n        for (int[] edge : adj.get(u)) {\n            int v = edge[0], w = edge[1];\n            if (d + w < dist[v]) { dist[v] = d + w; pq.add(new int[]{dist[v], v}); }\n        }\n    }\n    int maxD = 0;\n    for (int i = 1; i <= n; i++) {\n        if (dist[i] == Integer.MAX_VALUE) return -1;\n        maxD = Math.max(maxD, dist[i]);\n    }\n    return maxD;\n}",
          "cpp": "int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n    vector<vector<pair<int,int>>> adj(n + 1);\n    for (auto& t : times) adj[t[0]].push_back({t[1], t[2]});\n    vector<int> dist(n + 1, INT_MAX); dist[k] = 0;\n    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;\n    pq.push({0, k});\n    while (!pq.empty()) {\n        auto [d, u] = pq.top(); pq.pop();\n        if (d > dist[u]) continue;\n        for (auto& [v, w] : adj[u]) {\n            if (d + w < dist[v]) { dist[v] = d + w; pq.push({dist[v], v}); }\n        }\n    }\n    int maxD = 0;\n    for (int i = 1; i <= n; i++) {\n        if (dist[i] == INT_MAX) return -1;\n        maxD = max(maxD, dist[i]);\n    }\n    return maxD;\n}"
        },
        "questions": [
          {
            "id": "q-network-delay-time",
            "title": "Network Delay Time",
            "difficulty": "Medium",
            "estimated_minutes": 22,
            "leetcode_url": "https://leetcode.com/problems/network-delay-time/",
            "statement": "Return the minimum time it takes for all n nodes to receive a signal sent from node k.",
            "examples": [
              {
                "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= k <= n <= 100"
            ],
            "approach": "Dijkstra Shortest Path algorithm with Min-Heap.",
            "complexity": "Time: O((V + E) log V), Space: O(V + E)",
            "code": {
              "python": "class Solution:\n    def networkDelayTime(self, times: list[list[int]], n: int, k: int) -> int:\n        adj = defaultdict(list)\n        for u, v, w in times: adj[u].append((v, w))\n        dist = {i: float('inf') for i in range(1, n + 1)}\n        dist[k] = 0; pq = [(0, k)]\n        while pq:\n            d, u = heapq.heappop(pq)\n            if d > dist[u]: continue\n            for v, w in adj[u]:\n                if d + w < dist[v]: dist[v] = d + w; heapq.heappush(pq, (dist[v], v))\n        res = max(dist.values())\n        return res if res != float('inf') else -1",
              "java": "class Solution {\n    public int networkDelayTime(int[][] times, int n, int k) {\n        Map<Integer, List<int[]>> adj = new HashMap<>();\n        for (int i = 1; i <= n; i++) adj.put(i, new ArrayList<>());\n        for (int[] t : times) adj.get(t[0]).add(new int[]{t[1], t[2]});\n        int[] dist = new int[n + 1]; Arrays.fill(dist, Integer.MAX_VALUE);\n        dist[k] = 0;\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));\n        pq.add(new int[]{0, k});\n        while (!pq.isEmpty()) {\n            int[] curr = pq.poll(); int d = curr[0], u = curr[1];\n            if (d > dist[u]) continue;\n            for (int[] edge : adj.get(u)) {\n                int v = edge[0], w = edge[1];\n                if (d + w < dist[v]) { dist[v] = d + w; pq.add(new int[]{dist[v], v}); }\n            }\n        }\n        int maxD = 0;\n        for (int i = 1; i <= n; i++) {\n            if (dist[i] == Integer.MAX_VALUE) return -1;\n            maxD = Math.max(maxD, dist[i]);\n        }\n        return maxD;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n        vector<vector<pair<int,int>>> adj(n + 1);\n        for (auto& t : times) adj[t[0]].push_back({t[1], t[2]});\n        vector<int> dist(n + 1, INT_MAX); dist[k] = 0;\n        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;\n        pq.push({0, k});\n        while (!pq.empty()) {\n            auto [d, u] = pq.top(); pq.pop();\n            if (d > dist[u]) continue;\n            for (auto& [v, w] : adj[u]) {\n                if (d + w < dist[v]) { dist[v] = d + w; pq.push({dist[v], v}); }\n            }\n        }\n        int maxD = 0;\n        for (int i = 1; i <= n; i++) {\n            if (dist[i] == INT_MAX) return -1;\n            maxD = max(maxD, dist[i]);\n        }\n        return maxD;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-union-find",
        "name": "Union Find (Disjoint Set)",
        "subtitle": "Cycle Detection & Merging Components",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Manages disjoint sets with find (with path compression) and union (by rank) in near O(1) time.",
        "when_to_use": "Redundant Connection, Number of Operations to Make Network Connected, Min Cost to Connect All Points.",
        "how_to_identify": "Cycle in undirected graph, connected components merging, Minimum Spanning Tree.",
        "intuition": "Find parent root of x. If u and v share same parent root, adding edge (u, v) creates a cycle.",
        "step_by_step": [
          "parent[i] = i for all nodes",
          "find(x) compresses path: parent[x] = find(parent[x])",
          "union(u, v) merges sets; if find(u) == find(v), cycle detected!"
        ],
        "time_complexity": "O(E * alpha(V))",
        "space_complexity": "O(V)",
        "code_snippets": {
          "python": "def findRedundantConnection(edges):\n    parent = list(range(len(edges) + 1))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u == root_v: return [u, v]\n        parent[root_u] = root_v\n    return []",
          "java": "public int[] findRedundantConnection(int[][] edges) {\n    int n = edges.length;\n    int[] parent = new int[n + 1];\n    for (int i = 1; i <= n; i++) parent[i] = i;\n    for (int[] e : edges) {\n        int rU = find(parent, e[0]), rV = find(parent, e[1]);\n        if (rU == rV) return e;\n        parent[rU] = rV;\n    }\n    return new int[0];\n}\nprivate int find(int[] parent, int i) {\n    if (parent[i] == i) return i;\n    return parent[i] = find(parent, parent[i]);\n}",
          "cpp": "vector<int> findRedundantConnection(vector<vector<int>>& edges) {\n    int n = edges.size();\n    vector<int> parent(n + 1);\n    iota(parent.begin(), parent.end(), 0);\n    function<int(int)> find = [&](int i) {\n        return parent[i] == i ? i : parent[i] = find(parent[i]);\n    };\n    for (auto& e : edges) {\n        int rU = find(e[0]), rV = find(e[1]);\n        if (rU == rV) return e;\n        parent[rU] = rV;\n    }\n    return {};\n}"
        },
        "questions": [
          {
            "id": "q-redundant-connection",
            "title": "Redundant Connection",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/redundant-connection/",
            "statement": "Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
            "examples": [
              {
                "input": "edges = [[1,2],[1,3],[2,3]]",
                "output": "[2,3]"
              }
            ],
            "constraints": [
              "n == edges.length",
              "3 <= n <= 1000"
            ],
            "approach": "Union-Find (Disjoint Set) cycle detection.",
            "complexity": "Time: O(N * alpha(N)), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def findRedundantConnection(self, edges: list[list[int]]) -> list[int]:\n        parent = list(range(len(edges) + 1))\n        def find(i):\n            if parent[i] == i: return i\n            parent[i] = find(parent[i]); return parent[i]\n        for u, v in edges:\n            ru, rv = find(u), find(v)\n            if ru == rv: return [u, v]\n            parent[ru] = rv\n        return []",
              "java": "class Solution {\n    public int[] findRedundantConnection(int[][] edges) {\n        int n = edges.length; int[] parent = new int[n + 1];\n        for (int i = 1; i <= n; i++) parent[i] = i;\n        for (int[] e : edges) {\n            int rU = find(parent, e[0]), rV = find(parent, e[1]);\n            if (rU == rV) return e;\n            parent[rU] = rV;\n        }\n        return new int[0];\n    }\n    private int find(int[] parent, int i) {\n        if (parent[i] == i) return i;\n        return parent[i] = find(parent, parent[i]);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> findRedundantConnection(vector<vector<int>>& edges) {\n        int n = edges.size(); vector<int> parent(n + 1);\n        iota(parent.begin(), parent.end(), 0);\n        function<int(int)> find = [&](int i) {\n            return parent[i] == i ? i : parent[i] = find(parent[i]);\n        };\n        for (auto& e : edges) {\n            int rU = find(e[0]), rV = find(e[1]);\n            if (rU == rV) return e;\n            parent[rU] = rV;\n        }\n        return {};\n    }\n};"
            }
          },
          {
            "id": "q-min-cost-connect-all-points",
            "title": "Min Cost to Connect All Points",
            "difficulty": "Medium",
            "estimated_minutes": 22,
            "leetcode_url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
            "statement": "Return the minimum cost to make all points connected (Minimum Spanning Tree).",
            "examples": [
              {
                "input": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
                "output": "20"
              }
            ],
            "constraints": [
              "1 <= points.length <= 1000"
            ],
            "approach": "Kruskal's MST algorithm with Union-Find or Prim's algorithm.",
            "complexity": "Time: O(N^2 log N), Space: O(N^2)",
            "code": {
              "python": "class Solution:\n    def minCostConnectPoints(self, points: list[list[int]]) -> int:\n        n = len(points); edges = []\n        for i in range(n):\n            for j in range(i + 1, n):\n                d = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])\n                edges.append((d, i, j))\n        edges.sort()\n        parent = list(range(n))\n        def find(i):\n            if parent[i] == i: return i\n            parent[i] = find(parent[i]); return parent[i]\n        cost = count = 0\n        for d, u, v in edges:\n            ru, rv = find(u), find(v)\n            if ru != rv:\n                parent[ru] = rv; cost += d; count += 1\n                if count == n - 1: break\n        return cost",
              "java": "class Solution {\n    public int minCostConnectPoints(int[][] points) {\n        int n = points.length;\n        List<int[]> edges = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                int d = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);\n                edges.add(new int[]{d, i, j});\n            }\n        }\n        edges.sort((a, b) -> Integer.compare(a[0], b[0]));\n        int[] parent = new int[n]; for (int i = 0; i < n; i++) parent[i] = i;\n        int cost = 0, count = 0;\n        for (int[] e : edges) {\n            int ru = find(parent, e[1]), rv = find(parent, e[2]);\n            if (ru != rv) {\n                parent[ru] = rv; cost += e[0]; count++;\n                if (count == n - 1) break;\n            }\n        }\n        return cost;\n    }\n    private int find(int[] parent, int i) {\n        if (parent[i] == i) return i;\n        return parent[i] = find(parent, parent[i]);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minCostConnectPoints(vector<vector<int>>& points) {\n        int n = points.size();\n        vector<vector<int>> edges;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                int d = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);\n                edges.push_back({d, i, j});\n            }\n        }\n        sort(edges.begin(), edges.end());\n        vector<int> parent(n);\n        iota(parent.begin(), parent.end(), 0);\n        function<int(int)> find = [&](int i) {\n            return parent[i] == i ? i : parent[i] = find(parent[i]);\n        };\n        int cost = 0, count = 0;\n        for (auto& e : edges) {\n            int ru = find(e[1]), rv = find(e[2]);\n            if (ru != rv) {\n                parent[ru] = rv; cost += e[0]; count++;\n                if (count == n - 1) break;\n            }\n        }\n        return cost;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-greedy",
    "name": "Greedy",
    "description": "Master locally optimal choices for global optimality in interval scheduling, jump games, and gas station routing.",
    "icon": "Zap",
    "total_patterns": 3,
    "total_problems": 6,
    "patterns": [
      {
        "id": "pattern-interval-scheduling",
        "name": "Interval Scheduling",
        "subtitle": "Earliest End Time Sorting",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Sorts intervals by end time to maximize non-overlapping interval count.",
        "when_to_use": "Non-overlapping Intervals, Minimum Number of Arrows to Burst Balloons.",
        "how_to_identify": "Non-overlapping intervals, arrow burst balloons.",
        "intuition": "To leave maximum room for future intervals, greedily pick interval that finishes earliest.",
        "step_by_step": [
          "Sort intervals by end time",
          "Iterate: if interval start < prev end, increment removal count",
          "Else update prev end to interval end"
        ],
        "time_complexity": "O(N log N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def eraseOverlapIntervals(intervals):\n    intervals.sort(key=lambda x: x[1])\n    count = 0; end = float('-inf')\n    for inv in intervals:\n        if inv[0] >= end: end = inv[1]\n        else: count += 1\n    return count",
          "java": "public int eraseOverlapIntervals(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n    int count = 0, end = Integer.MIN_VALUE;\n    for (int[] inv : intervals) {\n        if (inv[0] >= end) end = inv[1];\n        else count++;\n    }\n    return count;\n}",
          "cpp": "int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; });\n    int count = 0, end = INT_MIN;\n    for (auto& inv : intervals) {\n        if (inv[0] >= end) end = inv[1];\n        else count++;\n    }\n    return count;\n}"
        },
        "questions": [
          {
            "id": "q-non-overlapping-intervals",
            "title": "Non-overlapping Intervals",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/non-overlapping-intervals/",
            "statement": "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            "examples": [
              {
                "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= intervals.length <= 10^5"
            ],
            "approach": "Sort by end time greedily.",
            "complexity": "Time: O(N log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:\n        intervals.sort(key=lambda x: x[1])\n        count = 0; end = float('-inf')\n        for inv in intervals:\n            if inv[0] >= end: end = inv[1]\n            else: count += 1\n        return count",
              "java": "class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n        int count = 0, end = Integer.MIN_VALUE;\n        for (int[] inv : intervals) {\n            if (inv[0] >= end) end = inv[1];\n            else count++;\n        }\n        return count;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; });\n        int count = 0, end = INT_MIN;\n        for (auto& inv : intervals) {\n            if (inv[0] >= end) end = inv[1];\n            else count++;\n        }\n        return count;\n    }\n};"
            }
          },
          {
            "id": "q-minimum-number-of-arrows-to-burst-balloons",
            "title": "Minimum Number of Arrows to Burst Balloons",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            "statement": "Return the minimum number of arrows that must be shot to burst all balloons.",
            "examples": [
              {
                "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= points.length <= 10^5"
            ],
            "approach": "Greedy interval end time shooting.",
            "complexity": "Time: O(N log N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def findMinArrowShots(self, points: list[list[int]]) -> int:\n        if not points: return 0\n        points.sort(key=lambda x: x[1])\n        arrows = 1; end = points[0][1]\n        for p in points[1:]:\n            if p[0] > end:\n                arrows += 1; end = p[1]\n        return arrows",
              "java": "class Solution {\n    public int findMinArrowShots(int[][] points) {\n        if (points.length == 0) return 0;\n        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));\n        int arrows = 1, end = points[0][1];\n        for (int i = 1; i < points.length; i++) {\n            if (points[i][0] > end) { arrows++; end = points[i][1]; }\n        }\n        return arrows;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int findMinArrowShots(vector<vector<int>>& points) {\n        if (points.empty()) return 0;\n        sort(points.begin(), points.end(), [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; });\n        int arrows = 1, end = points[0][1];\n        for (int i = 1; i < points.size(); i++) {\n            if (points[i][0] > end) { arrows++; end = points[i][1]; }\n        }\n        return arrows;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-jump-game",
        "name": "Jump Game & Reachability",
        "subtitle": "Max Reach Tracking",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Tracks farthest index reachable from current positions in array.",
        "when_to_use": "Jump Game, Jump Game II.",
        "how_to_identify": "Jump game reachability, minimum jumps to end.",
        "intuition": "At index i, update max_reach = max(max_reach, i + nums[i]). If i > max_reach, destination is unreachable.",
        "step_by_step": [
          "Maintain max_reach = 0",
          "Iterate index i from 0 to N-1",
          "If i > max_reach, return false",
          "max_reach = max(max_reach, i + nums[i])"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def canJump(nums):\n    max_reach = 0\n    for i, x in enumerate(nums):\n        if i > max_reach: return False\n        max_reach = max(max_reach, i + x)\n    return True",
          "java": "public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}",
          "cpp": "bool canJump(vector<int>& nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (i > maxReach) return false;\n        maxReach = max(maxReach, i + nums[i]);\n    }\n    return true;\n}"
        },
        "questions": [
          {
            "id": "q-jump-game",
            "title": "Jump Game",
            "difficulty": "Medium",
            "estimated_minutes": 12,
            "leetcode_url": "https://leetcode.com/problems/jump-game/",
            "statement": "Given an integer array nums, return true if you can reach the last index.",
            "examples": [
              {
                "input": "nums = [2,3,1,1,4]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Greedy max reach tracking.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def canJump(self, nums: list[int]) -> bool:\n        max_reach = 0\n        for i, x in enumerate(nums):\n            if i > max_reach: return False\n            max_reach = max(max_reach, i + x)\n        return True",
              "java": "class Solution {\n    public boolean canJump(int[] nums) {\n        int maxReach = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (i > maxReach) return false;\n            maxReach = Math.max(maxReach, i + nums[i]);\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        int maxReach = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            if (i > maxReach) return false;\n            maxReach = max(maxReach, i + nums[i]);\n        }\n        return true;\n    }\n};"
            }
          },
          {
            "id": "q-jump-game-ii",
            "title": "Jump Game II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/jump-game-ii/",
            "statement": "Return the minimum number of jumps to reach nums[n - 1].",
            "examples": [
              {
                "input": "nums = [2,3,1,1,4]",
                "output": "2"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10^4"
            ],
            "approach": "Greedy BFS level boundary tracking.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def jump(self, nums: list[int]) -> int:\n        jumps = max_reach = curr_end = 0\n        for i in range(len(nums) - 1):\n            max_reach = max(max_reach, i + nums[i])\n            if i == curr_end:\n                jumps += 1; curr_end = max_reach\n        return jumps",
              "java": "class Solution {\n    public int jump(int[] nums) {\n        int jumps = 0, maxReach = 0, currEnd = 0;\n        for (int i = 0; i < nums.length - 1; i++) {\n            maxReach = Math.max(maxReach, i + nums[i]);\n            if (i == currEnd) { jumps++; currEnd = maxReach; }\n        }\n        return jumps;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int jump(vector<int>& nums) {\n        int jumps = 0, maxReach = 0, currEnd = 0;\n        for (int i = 0; i < nums.size() - 1; i++) {\n            maxReach = max(maxReach, i + nums[i]);\n            if (i == currEnd) { jumps++; currEnd = maxReach; }\n        }\n        return jumps;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-gas-station-greedy",
        "name": "Gas Station & Routing",
        "subtitle": "Cumulative Net Gain Tracking",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Determines starting index in circular route where total gas >= total cost.",
        "when_to_use": "Gas Station, Lemonade Change.",
        "how_to_identify": "Gas station circuit, bill change.",
        "intuition": "If total gas >= total cost, a solution exists! If tank drops below 0 at index i, restart starting station at i + 1.",
        "step_by_step": [
          "If sum(gas) < sum(cost), return -1",
          "Iterate stations: tank += gas[i] - cost[i]",
          "If tank < 0: reset tank = 0, start_index = i + 1"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def canCompleteCircuit(gas, cost):\n    if sum(gas) < sum(cost): return -1\n    tank = start = 0\n    for i in range(len(gas)):\n        tank += gas[i] - cost[i]\n        if tank < 0: tank = 0; start = i + 1\n    return start",
          "java": "public int canCompleteCircuit(int[] gas, int[] cost) {\n    int totalGas = 0, totalCost = 0;\n    for (int i = 0; i < gas.length; i++) { totalGas += gas[i]; totalCost += cost[i]; }\n    if (totalGas < totalCost) return -1;\n    int tank = 0, start = 0;\n    for (int i = 0; i < gas.length; i++) {\n        tank += gas[i] - cost[i];\n        if (tank < 0) { tank = 0; start = i + 1; }\n    }\n    return start;\n}",
          "cpp": "int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n    int totalGas = 0, totalCost = 0;\n    for (int i = 0; i < gas.size(); i++) { totalGas += gas[i]; totalCost += cost[i]; }\n    if (totalGas < totalCost) return -1;\n    int tank = 0, start = 0;\n    for (int i = 0; i < gas.size(); i++) {\n        tank += gas[i] - cost[i];\n        if (tank < 0) { tank = 0; start = i + 1; }\n    }\n    return start;\n}"
        },
        "questions": [
          {
            "id": "q-gas-station",
            "title": "Gas Station",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/gas-station/",
            "statement": "Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
            "examples": [
              {
                "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= gas.length <= 10^5"
            ],
            "approach": "Greedy cumulative tank tracking.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:\n        if sum(gas) < sum(cost): return -1\n        tank = start = 0\n        for i in range(len(gas)):\n            tank += gas[i] - cost[i]\n            if tank < 0: tank = 0; start = i + 1\n        return start",
              "java": "class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        int totalGas = 0, totalCost = 0;\n        for (int i = 0; i < gas.length; i++) { totalGas += gas[i]; totalCost += cost[i]; }\n        if (totalGas < totalCost) return -1;\n        int tank = 0, start = 0;\n        for (int i = 0; i < gas.length; i++) {\n            tank += gas[i] - cost[i];\n            if (tank < 0) { tank = 0; start = i + 1; }\n        }\n        return start;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        int totalGas = 0, totalCost = 0;\n        for (int i = 0; i < gas.size(); i++) { totalGas += gas[i]; totalCost += cost[i]; }\n        if (totalGas < totalCost) return -1;\n        int tank = 0, start = 0;\n        for (int i = 0; i < gas.size(); i++) {\n            tank += gas[i] - cost[i];\n            if (tank < 0) { tank = 0; start = i + 1; }\n        }\n        return start;\n    }\n};"
            }
          },
          {
            "id": "q-lemonade-change",
            "title": "Lemonade Change",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/lemonade-change/",
            "statement": "Return true if you can provide every customer with correct change.",
            "examples": [
              {
                "input": "bills = [5,5,5,10,20]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= bills.length <= 10^5"
            ],
            "approach": "Greedy bill change: prefer giving $10 + $5 change over three $5 bills for $20.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def lemonadeChange(self, bills: list[int]) -> bool:\n        five = ten = 0\n        for b in bills:\n            if b == 5: five += 1\n            elif b == 10:\n                if not five: return False\n                five -= 1; ten += 1\n            else:\n                if ten and five: ten -= 1; five -= 1\n                elif five >= 3: five -= 3\n                else: return False\n        return True",
              "java": "class Solution {\n    public boolean lemonadeChange(int[] bills) {\n        int five = 0, ten = 0;\n        for (int b : bills) {\n            if (b == 5) five++;\n            else if (b == 10) {\n                if (five == 0) return false;\n                five--; ten++;\n            } else {\n                if (ten > 0 && five > 0) { ten--; five--; }\n                else if (five >= 3) five -= 3;\n                else return false;\n            }\n        }\n        return true;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool lemonadeChange(vector<int>& bills) {\n        int five = 0, ten = 0;\n        for (int b : bills) {\n            if (b == 5) five++;\n            else if (b == 10) {\n                if (five == 0) return false;\n                five--; ten++;\n            } else {\n                if (ten > 0 && five > 0) { ten--; five--; }\n                else if (five >= 3) five -= 3;\n                else return false;\n            }\n        }\n        return true;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-backtracking",
    "name": "Backtracking",
    "description": "Master recursive search trees, subset generation, permutations, combination sums, and grid constraint solving (N-Queens, Sudoku).",
    "icon": "Cpu",
    "total_patterns": 4,
    "total_problems": 9,
    "patterns": [
      {
        "id": "pattern-subsets",
        "name": "Subsets",
        "subtitle": "Include / Exclude State Tree",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Generates all subsets (power set) of a set of elements by recursively deciding to include or exclude each element.",
        "when_to_use": "Subsets, Subsets II.",
        "how_to_identify": "Power set, all unique subsets.",
        "intuition": "At index i, make two recursive calls: one including nums[i], one excluding nums[i]. For duplicates, sort first and skip adjacent equal values when unchosen.",
        "step_by_step": [
          "Define backtrack(index, path)",
          "Add copy of path to result",
          "Loop i from index to N-1",
          "path.append(nums[i]), backtrack(i+1, path), path.pop()"
        ],
        "time_complexity": "O(2^N)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def subsets(nums):\n    res = []\n    def backtrack(idx, path):\n        res.append(list(path))\n        for i in range(idx, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return res",
          "java": "public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n    res.add(new ArrayList<>(path));\n    for (int i = start; i < nums.length; i++) {\n        path.add(nums[i]);\n        backtrack(res, path, nums, i + 1);\n        path.remove(path.size() - 1);\n    }\n}",
          "cpp": "vector<vector<int>> subsets(vector<int>& nums) {\n    vector<vector<int>> res;\n    vector<int> path;\n    function<void(int)> backtrack = [&](int start) {\n        res.push_back(path);\n        for (int i = start; i < nums.size(); i++) {\n            path.push_back(nums[i]);\n            backtrack(i + 1);\n            path.pop_back();\n        }\n    };\n    backtrack(0);\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-subsets",
            "title": "Subsets",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/subsets/",
            "statement": "Given an integer array nums of unique elements, return all possible subsets (the power set).",
            "examples": [
              {
                "input": "nums = [1,2,3]",
                "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10"
            ],
            "approach": "Backtracking decision tree including/excluding elements.",
            "complexity": "Time: O(2^N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        res = []\n        def backtrack(idx, path):\n            res.append(list(path))\n            for i in range(idx, len(nums)):\n                path.append(nums[i]); backtrack(i + 1, path); path.pop()\n        backtrack(0, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), nums, 0);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n        res.add(new ArrayList<>(path));\n        for (int i = start; i < nums.length; i++) {\n            path.add(nums[i]); backtrack(res, path, nums, i + 1); path.remove(path.size() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> res; vector<int> path;\n        function<void(int)> backtrack = [&](int start) {\n            res.push_back(path);\n            for (int i = start; i < nums.size(); i++) {\n                path.push_back(nums[i]); backtrack(i + 1); path.pop_back();\n            }\n        };\n        backtrack(0);\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-subsets-ii",
            "title": "Subsets II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/subsets-ii/",
            "statement": "Given an integer array nums that may contain duplicates, return all possible subsets without duplicate subsets.",
            "examples": [
              {
                "input": "nums = [1,2,2]",
                "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10"
            ],
            "approach": "Sort array first. Skip duplicate choices if i > start and nums[i] == nums[i-1].",
            "complexity": "Time: O(2^N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:\n        nums.sort(); res = []\n        def backtrack(idx, path):\n            res.append(list(path))\n            for i in range(idx, len(nums)):\n                if i > idx and nums[i] == nums[i-1]: continue\n                path.append(nums[i]); backtrack(i + 1, path); path.pop()\n        backtrack(0, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), nums, 0);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n        res.add(new ArrayList<>(path));\n        for (int i = start; i < nums.length; i++) {\n            if (i > start && nums[i] == nums[i-1]) continue;\n            path.add(nums[i]); backtrack(res, path, nums, i + 1); path.remove(path.size() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsetsWithDup(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> res; vector<int> path;\n        function<void(int)> backtrack = [&](int start) {\n            res.push_back(path);\n            for (int i = start; i < nums.size(); i++) {\n                if (i > start && nums[i] == nums[i-1]) continue;\n                path.push_back(nums[i]); backtrack(i + 1); path.pop_back();\n            }\n        };\n        backtrack(0);\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-permutations",
        "name": "Permutations",
        "subtitle": "Ordering & Swapping State Tree",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Generates all distinct orderings of a given set of elements.",
        "when_to_use": "Permutations, Permutations II.",
        "how_to_identify": "All possible orderings, arrangement permutations.",
        "intuition": "Use visited array or element swapping to ensure each element is picked once per permutation path.",
        "step_by_step": [
          "Define backtrack(path, visited)",
          "If len(path) == N, append path to results",
          "Loop i from 0 to N-1: if not visited[i], mark visited[i]=True, recurse, mark visited[i]=False"
        ],
        "time_complexity": "O(N * N!)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def permute(nums):\n    res = []\n    def backtrack(path, visited):\n        if len(path) == len(nums): res.append(list(path)); return\n        for i in range(len(nums)):\n            if not visited[i]:\n                visited[i] = True; path.append(nums[i])\n                backtrack(path, visited)\n                path.pop(); visited[i] = False\n    backtrack([], [False] * len(nums))\n    return res",
          "java": "public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] visited) {\n    if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < nums.length; i++) {\n        if (!visited[i]) {\n            visited[i] = true; path.add(nums[i]);\n            backtrack(res, path, nums, visited);\n            path.remove(path.size() - 1); visited[i] = false;\n        }\n    }\n}",
          "cpp": "vector<vector<int>> permute(vector<int>& nums) {\n    vector<vector<int>> res; vector<int> path; vector<bool> visited(nums.size(), false);\n    function<void()> backtrack = [&]() {\n        if (path.size() == nums.size()) { res.push_back(path); return; }\n        for (int i = 0; i < nums.size(); i++) {\n            if (!visited[i]) {\n                visited[i] = true; path.push_back(nums[i]);\n                backtrack();\n                path.pop_back(); visited[i] = false;\n            }\n        }\n    };\n    backtrack();\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-permutations",
            "title": "Permutations",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/permutations/",
            "statement": "Given an array nums of distinct integers, return all the possible permutations.",
            "examples": [
              {
                "input": "nums = [1,2,3]",
                "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 6"
            ],
            "approach": "Backtracking using boolean visited array.",
            "complexity": "Time: O(N * N!), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def permute(self, nums: list[int]) -> list[list[int]]:\n        res = []\n        def backtrack(path, visited):\n            if len(path) == len(nums): res.append(list(path)); return\n            for i in range(len(nums)):\n                if not visited[i]:\n                    visited[i] = True; path.append(nums[i]); backtrack(path, visited)\n                    path.pop(); visited[i] = False\n        backtrack([], [False] * len(nums))\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] visited) {\n        if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n        for (int i = 0; i < nums.length; i++) {\n            if (!visited[i]) {\n                visited[i] = true; path.add(nums[i]); backtrack(res, path, nums, visited);\n                path.remove(path.size() - 1); visited[i] = false;\n            }\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        vector<vector<int>> res; vector<int> path; vector<bool> visited(nums.size(), false);\n        function<void()> backtrack = [&]() {\n            if (path.size() == nums.size()) { res.push_back(path); return; }\n            for (int i = 0; i < nums.size(); i++) {\n                if (!visited[i]) {\n                    visited[i] = true; path.push_back(nums[i]); backtrack();\n                    path.pop_back(); visited[i] = false;\n                }\n            }\n        };\n        backtrack();\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-permutations-ii",
            "title": "Permutations II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/permutations-ii/",
            "statement": "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations.",
            "examples": [
              {
                "input": "nums = [1,1,2]",
                "output": "[[1,1,2],[1,2,1],[2,1,1]]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 8"
            ],
            "approach": "Sort array. Skip choice if nums[i] == nums[i-1] and not visited[i-1].",
            "complexity": "Time: O(N * N!), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def permuteUnique(self, nums: list[int]) -> list[list[int]]:\n        nums.sort(); res = []\n        def backtrack(path, visited):\n            if len(path) == len(nums): res.append(list(path)); return\n            for i in range(len(nums)):\n                if visited[i] or (i > 0 and nums[i] == nums[i-1] and not visited[i-1]): continue\n                visited[i] = True; path.append(nums[i]); backtrack(path, visited)\n                path.pop(); visited[i] = False\n        backtrack([], [False] * len(nums))\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] visited) {\n        if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n        for (int i = 0; i < nums.length; i++) {\n            if (visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1])) continue;\n            visited[i] = true; path.add(nums[i]); backtrack(res, path, nums, visited);\n            path.remove(path.size() - 1); visited[i] = false;\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> permuteUnique(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> res; vector<int> path; vector<bool> visited(nums.size(), false);\n        function<void()> backtrack = [&]() {\n            if (path.size() == nums.size()) { res.push_back(path); return; }\n            for (int i = 0; i < nums.size(); i++) {\n                if (visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1])) continue;\n                visited[i] = true; path.push_back(nums[i]); backtrack();\n                path.pop_back(); visited[i] = false;\n            }\n        };\n        backtrack();\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-combination-sum",
        "name": "Combination Sum",
        "subtitle": "Target Decrement Search",
        "difficulty": "Medium",
        "total_problems": 3,
        "what": "Recursively finds combinations summing to target with optional element reuse.",
        "when_to_use": "Combination Sum, Combination Sum II, Combinations.",
        "how_to_identify": "Sum to target, reuse candidates.",
        "intuition": "Subtract candidate value from targetSum. If targetSum == 0, valid combination found.",
        "step_by_step": [
          "Define backtrack(index, remaining_target, path)",
          "If remaining_target == 0, append path",
          "Loop i from index to N-1: if candidates[i] <= remaining_target, recurse"
        ],
        "time_complexity": "O(2^Target)",
        "space_complexity": "O(Target)",
        "code_snippets": {
          "python": "def combinationSum(candidates, target):\n    res = []\n    def backtrack(idx, rem, path):\n        if rem == 0: res.append(list(path)); return\n        for i in range(idx, len(candidates)):\n            if candidates[i] <= rem:\n                path.append(candidates[i])\n                backtrack(i, rem - candidates[i], path)\n                path.pop()\n    backtrack(0, target, [])\n    return res",
          "java": "public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), candidates, target, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] candidates, int rem, int start) {\n    if (rem == 0) { res.add(new ArrayList<>(path)); return; }\n    for (int i = start; i < candidates.length; i++) {\n        if (candidates[i] <= rem) {\n            path.add(candidates[i]);\n            backtrack(res, path, candidates, rem - candidates[i], i);\n            path.remove(path.size() - 1);\n        }\n    }\n}",
          "cpp": "vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n    vector<vector<int>> res; vector<int> path;\n    function<void(int, int)> backtrack = [&](int start, int rem) {\n        if (rem == 0) { res.push_back(path); return; }\n        for (int i = start; i < candidates.size(); i++) {\n            if (candidates[i] <= rem) {\n                path.push_back(candidates[i]);\n                backtrack(i, rem - candidates[i]);\n                path.pop_back();\n            }\n        }\n    };\n    backtrack(0, target);\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-combination-sum",
            "title": "Combination Sum",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/combination-sum/",
            "statement": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target.",
            "examples": [
              {
                "input": "candidates = [2,3,6,7], target = 7",
                "output": "[[2,2,3],[7]]"
              }
            ],
            "constraints": [
              "1 <= candidates.length <= 30"
            ],
            "approach": "Backtracking allowing candidate reuse (pass same index i).",
            "complexity": "Time: O(2^Target), Space: O(Target)",
            "code": {
              "python": "class Solution:\n    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:\n        res = []\n        def backtrack(idx, rem, path):\n            if rem == 0: res.append(list(path)); return\n            for i in range(idx, len(candidates)):\n                if candidates[i] <= rem:\n                    path.append(candidates[i]); backtrack(i, rem - candidates[i], path); path.pop()\n        backtrack(0, target, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), candidates, target, 0);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] candidates, int rem, int start) {\n        if (rem == 0) { res.add(new ArrayList<>(path)); return; }\n        for (int i = start; i < candidates.length; i++) {\n            if (candidates[i] <= rem) {\n                path.add(candidates[i]); backtrack(res, path, candidates, rem - candidates[i], i); path.remove(path.size() - 1);\n            }\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        vector<vector<int>> res; vector<int> path;\n        function<void(int, int)> backtrack = [&](int start, int rem) {\n            if (rem == 0) { res.push_back(path); return; }\n            for (int i = start; i < candidates.size(); i++) {\n                if (candidates[i] <= rem) {\n                    path.push_back(candidates[i]); backtrack(i, rem - candidates[i]); path.pop_back();\n                }\n            }\n        };\n        backtrack(0, target);\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-combination-sum-ii",
            "title": "Combination Sum II",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/combination-sum-ii/",
            "statement": "Find all unique combinations in candidates where the candidate numbers sum to target. Each number may only be used once.",
            "examples": [
              {
                "input": "candidates = [10,1,2,7,6,1,5], target = 8",
                "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]"
              }
            ],
            "constraints": [
              "1 <= candidates.length <= 100"
            ],
            "approach": "Sort candidates. Skip duplicates if i > start and candidates[i] == candidates[i-1]. Pass i + 1 for single-use.",
            "complexity": "Time: O(2^N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def combinationSum2(self, candidates: list[int], target: int) -> list[list[int]]:\n        candidates.sort(); res = []\n        def backtrack(idx, rem, path):\n            if rem == 0: res.append(list(path)); return\n            for i in range(idx, len(candidates)):\n                if i > idx and candidates[i] == candidates[i-1]: continue\n                if candidates[i] > rem: break\n                path.append(candidates[i]); backtrack(i + 1, rem - candidates[i], path); path.pop()\n        backtrack(0, target, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) {\n        Arrays.sort(candidates);\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), candidates, target, 0);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int[] candidates, int rem, int start) {\n        if (rem == 0) { res.add(new ArrayList<>(path)); return; }\n        for (int i = start; i < candidates.length; i++) {\n            if (i > start && candidates[i] == candidates[i-1]) continue;\n            if (candidates[i] > rem) break;\n            path.add(candidates[i]); backtrack(res, path, candidates, rem - candidates[i], i + 1); path.remove(path.size() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\n        sort(candidates.begin(), candidates.end());\n        vector<vector<int>> res; vector<int> path;\n        function<void(int, int)> backtrack = [&](int start, int rem) {\n            if (rem == 0) { res.push_back(path); return; }\n            for (int i = start; i < candidates.size(); i++) {\n                if (i > start && candidates[i] == candidates[i-1]) continue;\n                if (candidates[i] > rem) break;\n                path.push_back(candidates[i]); backtrack(i + 1, rem - candidates[i]); path.pop_back();\n            }\n        };\n        backtrack(0, target);\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-combinations",
            "title": "Combinations",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/combinations/",
            "statement": "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].",
            "examples": [
              {
                "input": "n = 4, k = 2",
                "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
              }
            ],
            "constraints": [
              "1 <= n <= 20",
              "1 <= k <= n"
            ],
            "approach": "Backtracking picking numbers from 1 to n until path length is k.",
            "complexity": "Time: O(C(n, k)), Space: O(k)",
            "code": {
              "python": "class Solution:\n    def combine(self, n: int, k: int) -> list[list[int]]:\n        res = []\n        def backtrack(start, path):\n            if len(path) == k: res.append(list(path)); return\n            for i in range(start, n + 1):\n                path.append(i); backtrack(i + 1, path); path.pop()\n        backtrack(1, [])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> combine(int n, int k) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(res, new ArrayList<>(), 1, n, k);\n        return res;\n    }\n    private void backtrack(List<List<Integer>> res, List<Integer> path, int start, int n, int k) {\n        if (path.size() == k) { res.add(new ArrayList<>(path)); return; }\n        for (int i = start; i <= n; i++) {\n            path.add(i); backtrack(res, path, i + 1, n, k); path.remove(path.size() - 1);\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        vector<vector<int>> res; vector<int> path;\n        function<void(int)> backtrack = [&](int start) {\n            if (path.size() == k) { res.push_back(path); return; }\n            for (int i = start; i <= n; i++) {\n                path.push_back(i); backtrack(i + 1); path.pop_back();\n            }\n        };\n        backtrack(1);\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-grid-backtracking-nqueens",
        "name": "Grid Constraint Search & N-Queens",
        "subtitle": "N-Queens & Board Search",
        "difficulty": "Hard",
        "total_problems": 2,
        "what": "Places items on grid or chess board, backtracking when row/column/diagonal conflict is reached.",
        "when_to_use": "Word Search, N-Queens, Sudoku Solver.",
        "how_to_identify": "N-Queens, Sudoku, word search on grid board.",
        "intuition": "Maintain sets or arrays for occupied columns, positive diagonals (r + c), and negative diagonals (r - c).",
        "step_by_step": [
          "For row r, iterate col c from 0 to N-1",
          "If col c, r+c, r-c available: place queen, recurse row r+1, unplace queen"
        ],
        "time_complexity": "O(N!)",
        "space_complexity": "O(N)",
        "code_snippets": {
          "python": "def solveNQueens(n):\n    res = []\n    cols = set(); posDiag = set(); negDiag = set()\n    board = [['.'] * n for _ in range(n)]\n    def backtrack(r):\n        if r == n:\n            res.append([''.join(row) for row in board]); return\n        for c in range(n):\n            if c in cols or (r + c) in posDiag or (r - c) in negDiag: continue\n            cols.add(c); posDiag.add(r + c); negDiag.add(r - c)\n            board[r][c] = 'Q'\n            backtrack(r + 1)\n            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c)\n            board[r][c] = '.'\n    backtrack(0)\n    return res",
          "java": "public List<List<String>> solveNQueens(int n) {\n    List<List<String>> res = new ArrayList<>();\n    char[][] board = new char[n][n];\n    for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');\n    boolean[] cols = new boolean[n], posD = new boolean[2 * n], negD = new boolean[2 * n];\n    backtrack(res, board, 0, n, cols, posD, negD);\n    return res;\n}\nprivate void backtrack(List<List<String>> res, char[][] board, int r, int n, boolean[] cols, boolean[] posD, boolean[] negD) {\n    if (r == n) {\n        List<String> list = new ArrayList<>();\n        for (char[] row : board) list.add(new String(row));\n        res.add(list); return;\n    }\n    for (int c = 0; c < n; c++) {\n        if (cols[c] || posD[r + c] || negD[r - c + n]) continue;\n        cols[c] = posD[r + c] = negD[r - c + n] = true; board[r][c] = 'Q';\n        backtrack(res, board, r + 1, n, cols, posD, negD);\n        cols[c] = posD[r + c] = negD[r - c + n] = false; board[r][c] = '.';\n    }\n}",
          "cpp": "vector<vector<string>> solveNQueens(int n) {\n    vector<vector<string>> res; vector<string> board(n, string(n, '.'));\n    vector<bool> cols(n, false), posD(2 * n, false), negD(2 * n, false);\n    function<void(int)> backtrack = [&](int r) {\n        if (r == n) { res.push_back(board); return; }\n        for (int c = 0; c < n; c++) {\n            if (cols[c] || posD[r + c] || negD[r - c + n]) continue;\n            cols[c] = posD[r + c] = negD[r - c + n] = true; board[r][c] = 'Q';\n            backtrack(r + 1);\n            cols[c] = posD[r + c] = negD[r - c + n] = false; board[r][c] = '.';\n        }\n    };\n    backtrack(0);\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-word-search",
            "title": "Word Search",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/word-search/",
            "statement": "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
            "examples": [
              {
                "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
                "output": "true"
              }
            ],
            "constraints": [
              "m, n <= 6"
            ],
            "approach": "Grid DFS backtracking marking cell visited temporarily.",
            "complexity": "Time: O(N * 4^L), Space: O(L)",
            "code": {
              "python": "class Solution:\n    def exist(self, board: list[list[str]], word: str) -> bool:\n        r, c = len(board), len(board[0])\n        def dfs(i, j, k):\n            if k == len(word): return True\n            if i < 0 or i >= r or j < 0 or j >= c or board[i][j] != word[k]: return False\n            tmp = board[i][j]; board[i][j] = '#'\n            res = dfs(i+1, j, k+1) or dfs(i-1, j, k+1) or dfs(i, j+1, k+1) or dfs(i, j-1, k+1)\n            board[i][j] = tmp\n            return res\n        for i in range(r):\n            for j in range(c):\n                if dfs(i, j, 0): return True\n        return False",
              "java": "class Solution {\n    public boolean exist(char[][] board, String word) {\n        int r = board.length, c = board[0].length;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (dfs(board, word, i, j, 0)) return true;\n            }\n        }\n        return false;\n    }\n    private boolean dfs(char[][] board, String word, int i, int j, int k) {\n        if (k == word.length()) return true;\n        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word.charAt(k)) return false;\n        char tmp = board[i][j]; board[i][j] = '#';\n        boolean res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) ||\n                      dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1);\n        board[i][j] = tmp;\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        int r = board.size(), c = board[0].size();\n        function<bool(int,int,int)> dfs = [&](int i, int j, int k) -> bool {\n            if (k == word.length()) return true;\n            if (i < 0 || i >= r || j < 0 || j >= c || board[i][j] != word[k]) return false;\n            char tmp = board[i][j]; board[i][j] = '#';\n            bool res = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);\n            board[i][j] = tmp;\n            return res;\n        };\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (dfs(i, j, 0)) return true;\n            }\n        }\n        return false;\n    }\n};"
            }
          },
          {
            "id": "q-n-queens",
            "title": "N-Queens",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/n-queens/",
            "statement": "Place n queens on an n x n chessboard such that no two queens attack each other.",
            "examples": [
              {
                "input": "n = 4",
                "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]"
              }
            ],
            "constraints": [
              "1 <= n <= 9"
            ],
            "approach": "Backtracking row-by-row tracking occupied column and diagonal sets.",
            "complexity": "Time: O(N!), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def solveNQueens(self, n: int) -> list[list[str]]:\n        res = []\n        cols, posD, negD = set(), set(), set()\n        board = [['.'] * n for _ in range(n)]\n        def backtrack(r):\n            if r == n: res.append([''.join(row) for row in board]); return\n            for c in range(n):\n                if c in cols or (r + c) in posD or (r - c) in negD: continue\n                cols.add(c); posD.add(r + c); negD.add(r - c); board[r][c] = 'Q'\n                backtrack(r + 1)\n                cols.remove(c); posD.remove(r + c); negD.remove(r - c); board[r][c] = '.'\n        backtrack(0)\n        return res",
              "java": "class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        List<List<String>> res = new ArrayList<>();\n        char[][] board = new char[n][n];\n        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');\n        boolean[] cols = new boolean[n], posD = new boolean[2 * n], negD = new boolean[2 * n];\n        backtrack(res, board, 0, n, cols, posD, negD);\n        return res;\n    }\n    private void backtrack(List<List<String>> res, char[][] board, int r, int n, boolean[] cols, boolean[] posD, boolean[] negD) {\n        if (r == n) {\n            List<String> list = new ArrayList<>();\n            for (char[] row : board) list.add(new String(row));\n            res.add(list); return;\n        }\n        for (int c = 0; c < n; c++) {\n            if (cols[c] || posD[r + c] || negD[r - c + n]) continue;\n            cols[c] = posD[r + c] = negD[r - c + n] = true; board[r][c] = 'Q';\n            backtrack(res, board, r + 1, n, cols, posD, negD);\n            cols[c] = posD[r + c] = negD[r - c + n] = false; board[r][c] = '.';\n        }\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        vector<vector<string>> res; vector<string> board(n, string(n, '.'));\n        vector<bool> cols(n, false), posD(2 * n, false), negD(2 * n, false);\n        function<void(int)> backtrack = [&](int r) {\n            if (r == n) { res.push_back(board); return; }\n            for (int c = 0; c < n; c++) {\n                if (cols[c] || posD[r + c] || negD[r - c + n]) continue;\n                cols[c] = posD[r + c] = negD[r - c + n] = true; board[r][c] = 'Q';\n                backtrack(r + 1);\n                cols[c] = posD[r + c] = negD[r - c + n] = false; board[r][c] = '.';\n            }\n        };\n        backtrack(0);\n        return res;\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-dynamic-programming",
    "name": "Dynamic Programming",
    "description": "Master 1D DP, 2D Grid DP, 0/1 & Unbounded Knapsack, Subsequence & String DP, Stock Trading DP, and Interval DP.",
    "icon": "TrendingUp",
    "total_patterns": 5,
    "total_problems": 13,
    "patterns": [
      {
        "id": "pattern-1d-dp",
        "name": "1D Dynamic Programming",
        "subtitle": "Linear Recurrence & State Compression",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 3,
        "what": "Stores subproblem results in 1D array dp[i] to avoid exponential overlapping recursive work.",
        "when_to_use": "Climbing Stairs, House Robber, House Robber II.",
        "how_to_identify": "Climbing stairs ways, house robber non-adjacent max sum.",
        "intuition": "dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Space can be optimized to O(1) using two variables.",
        "step_by_step": [
          "Initialize dp[0] and dp[1]",
          "Loop i from 2 to N",
          "dp[i] = max(dp[i-1], dp[i-2] + nums[i])"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def rob(nums):\n    prev = curr = 0\n    for x in nums:\n        prev, curr = curr, max(curr, prev + x)\n    return curr",
          "java": "public int rob(int[] nums) {\n    int prev = 0, curr = 0;\n    for (int x : nums) {\n        int tmp = curr;\n        curr = Math.max(curr, prev + x);\n        prev = tmp;\n    }\n    return curr;\n}",
          "cpp": "int rob(vector<int>& nums) {\n    int prev = 0, curr = 0;\n    for (int x : nums) {\n        int tmp = curr;\n        curr = max(curr, prev + x);\n        prev = tmp;\n    }\n    return curr;\n}"
        },
        "questions": [
          {
            "id": "q-climbing-stairs",
            "title": "Climbing Stairs",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/climbing-stairs/",
            "statement": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return number of distinct ways.",
            "examples": [
              {
                "input": "n = 3",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= n <= 45"
            ],
            "approach": "1D DP fibonacci recurrence: dp[i] = dp[i-1] + dp[i-2].",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        a, b = 1, 1\n        for _ in range(n - 1): a, b = b, a + b\n        return b",
              "java": "class Solution {\n    public int climbStairs(int n) {\n        int a = 1, b = 1;\n        for (int i = 0; i < n - 1; i++) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        int a = 1, b = 1;\n        for (int i = 0; i < n - 1; i++) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n};"
            }
          },
          {
            "id": "q-house-robber",
            "title": "House Robber",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/house-robber/",
            "statement": "Return the maximum amount of money you can rob tonight without alerting the police (cannot rob adjacent houses).",
            "examples": [
              {
                "input": "nums = [2,7,9,3,1]",
                "output": "12"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 100"
            ],
            "approach": "1D DP non-adjacent choice: curr = max(curr, prev + x).",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def rob(self, nums: list[int]) -> int:\n        prev = curr = 0\n        for x in nums:\n            prev, curr = curr, max(curr, prev + x)\n        return curr",
              "java": "class Solution {\n    public int rob(int[] nums) {\n        int prev = 0, curr = 0;\n        for (int x : nums) {\n            int tmp = curr; curr = Math.max(curr, prev + x); prev = tmp;\n        }\n        return curr;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        int prev = 0, curr = 0;\n        for (int x : nums) {\n            int tmp = curr; curr = max(curr, prev + x); prev = tmp;\n        }\n        return curr;\n    }\n};"
            }
          },
          {
            "id": "q-house-robber-ii",
            "title": "House Robber II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/house-robber-ii/",
            "statement": "Houses are arranged in a circle. Return maximum money without robbing adjacent houses.",
            "examples": [
              {
                "input": "nums = [2,3,2]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 100"
            ],
            "approach": "Run House Robber I twice: for nums[0..n-2] and nums[1..n-1].",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def rob(self, nums: list[int]) -> int:\n        if len(nums) == 1: return nums[0]\n        def simple_rob(arr):\n            prev = curr = 0\n            for x in arr: prev, curr = curr, max(curr, prev + x)\n            return curr\n        return max(simple_rob(nums[:-1]), simple_rob(nums[1:]))",
              "java": "class Solution {\n    public int rob(int[] nums) {\n        if (nums.length == 1) return nums[0];\n        return Math.max(simpleRob(nums, 0, nums.length - 2), simpleRob(nums, 1, nums.length - 1));\n    }\n    private int simpleRob(int[] nums, int l, int r) {\n        int prev = 0, curr = 0;\n        for (int i = l; i <= r; i++) {\n            int tmp = curr; curr = Math.max(curr, prev + nums[i]); prev = tmp;\n        }\n        return curr;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        if (nums.size() == 1) return nums[0];\n        auto simpleRob = [&](int l, int r) {\n            int prev = 0, curr = 0;\n            for (int i = l; i <= r; i++) {\n                int tmp = curr; curr = max(curr, prev + nums[i]); prev = tmp;\n            }\n            return curr;\n        };\n        return max(simpleRob(0, nums.size() - 2), simpleRob(1, nums.size() - 1));\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-2d-grid-dp",
        "name": "2D Grid DP",
        "subtitle": "Grid Path Optimization",
        "difficulty": "Medium",
        "total_problems": 2,
        "what": "Computes path counts or minimum path cost on 2D grids using transition grid[r][c].",
        "when_to_use": "Unique Paths, Minimum Path Sum.",
        "how_to_identify": "Grid path ways, min path sum in grid.",
        "intuition": "dp[r][c] = dp[r-1][c] + dp[r][c-1] (for unique paths) or grid[r][c] + min(dp[r-1][c], dp[r][c-1]).",
        "step_by_step": [
          "Initialize top row and left column",
          "Loop row r from 1 to M-1, col c from 1 to N-1",
          "dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1])"
        ],
        "time_complexity": "O(M * N)",
        "space_complexity": "O(N) space optimized",
        "code_snippets": {
          "python": "def uniquePaths(m, n):\n    dp = [1] * n\n    for _ in range(m - 1):\n        for c in range(1, n):\n            dp[c] += dp[c-1]\n    return dp[-1]",
          "java": "public int uniquePaths(int m, int n) {\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n    }\n    return dp[n - 1];\n}",
          "cpp": "int uniquePaths(int m, int n) {\n    vector<int> dp(n, 1);\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n    }\n    return dp[n - 1];\n}"
        },
        "questions": [
          {
            "id": "q-unique-paths",
            "title": "Unique Paths",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/unique-paths/",
            "statement": "A robot is located at top-left corner of m x n grid. Return total unique paths to bottom-right corner.",
            "examples": [
              {
                "input": "m = 3, n = 7",
                "output": "28"
              }
            ],
            "constraints": [
              "1 <= m, n <= 100"
            ],
            "approach": "2D DP: dp[c] += dp[c-1].",
            "complexity": "Time: O(M * N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for _ in range(m - 1):\n            for c in range(1, n): dp[c] += dp[c-1]\n        return dp[-1]",
              "java": "class Solution {\n    public int uniquePaths(int m, int n) {\n        int[] dp = new int[n]; Arrays.fill(dp, 1);\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n        }\n        return dp[n - 1];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        vector<int> dp(n, 1);\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n        }\n        return dp[n - 1];\n    }\n};"
            }
          },
          {
            "id": "q-minimum-path-sum",
            "title": "Minimum Path Sum",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/minimum-path-sum/",
            "statement": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes sum.",
            "examples": [
              {
                "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
                "output": "7"
              }
            ],
            "constraints": [
              "m == grid.length, n == grid[i].length"
            ],
            "approach": "2D DP grid min path cost.",
            "complexity": "Time: O(M * N), Space: O(1) in-place",
            "code": {
              "python": "class Solution:\n    def minPathSum(self, grid: list[list[int]]) -> int:\n        r, c = len(grid), len(grid[0])\n        for j in range(1, c): grid[0][j] += grid[0][j-1]\n        for i in range(1, r): grid[i][0] += grid[i-1][0]\n        for i in range(1, r):\n            for j in range(1, c):\n                grid[i][j] += min(grid[i-1][j], grid[i][j-1])\n        return grid[r-1][c-1]",
              "java": "class Solution {\n    public int minPathSum(int[][] grid) {\n        int r = grid.length, c = grid[0].length;\n        for (int j = 1; j < c; j++) grid[0][j] += grid[0][j-1];\n        for (int i = 1; i < r; i++) grid[i][0] += grid[i-1][0];\n        for (int i = 1; i < r; i++) {\n            for (int j = 1; j < c; j++) grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);\n        }\n        return grid[r-1][c-1];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        int r = grid.size(), c = grid[0].size();\n        for (int j = 1; j < c; j++) grid[0][j] += grid[0][j-1];\n        for (int i = 1; i < r; i++) grid[i][0] += grid[i-1][0];\n        for (int i = 1; i < r; i++) {\n            for (int j = 1; j < c; j++) grid[i][j] += min(grid[i-1][j], grid[i][j-1]);\n        }\n        return grid[r-1][c-1];\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-knapsack-dp",
        "name": "Knapsack DP",
        "subtitle": "0/1 & Unbounded Subset Sum",
        "difficulty": "Medium",
        "total_problems": 3,
        "what": "Determines subset sum combinations (0/1 pick once, or unbounded pick multiple times).",
        "when_to_use": "Partition Equal Subset Sum, Coin Change, Coin Change II.",
        "how_to_identify": "Coin change min coins, subset sum partition.",
        "intuition": "dp[amount] = min(dp[amount], 1 + dp[amount - coin]).",
        "step_by_step": [
          "Initialize dp array size amount + 1 with inf, dp[0] = 0",
          "Loop coin in coins",
          "Loop a from coin to amount: dp[a] = min(dp[a], 1 + dp[a - coin])"
        ],
        "time_complexity": "O(N * Amount)",
        "space_complexity": "O(Amount)",
        "code_snippets": {
          "python": "def coinChange(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for a in range(coin, amount + 1):\n            dp[a] = min(dp[a], 1 + dp[a - coin])\n    return dp[amount] if dp[amount] != float('inf') else -1",
          "java": "public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int a = coin; a <= amount; a++) dp[a] = Math.min(dp[a], 1 + dp[a - coin]);\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
          "cpp": "int coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int a = coin; a <= amount; a++) dp[a] = min(dp[a], 1 + dp[a - coin]);\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}"
        },
        "questions": [
          {
            "id": "q-partition-equal-subset-sum",
            "title": "Partition Equal Subset Sum",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/partition-equal-subset-sum/",
            "statement": "Given an array nums, return true if you can partition the array into two subsets such that the sum of elements in both subsets is equal.",
            "examples": [
              {
                "input": "nums = [1,5,11,5]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 200"
            ],
            "approach": "0/1 Knapsack DP targeting sum // 2.",
            "complexity": "Time: O(N * Target), Space: O(Target)",
            "code": {
              "python": "class Solution:\n    def canPartition(self, nums: list[int]) -> bool:\n        total = sum(nums)\n        if total % 2 != 0: return False\n        target = total // 2\n        dp = {0}\n        for x in nums:\n            dp |= {x + t for t in dp if x + t <= target}\n        return target in dp",
              "java": "class Solution {\n    public boolean canPartition(int[] nums) {\n        int total = 0; for (int x : nums) total += x;\n        if (total % 2 != 0) return false;\n        int target = total / 2;\n        boolean[] dp = new boolean[target + 1]; dp[0] = true;\n        for (int x : nums) {\n            for (int j = target; j >= x; j--) dp[j] = dp[j] || dp[j - x];\n        }\n        return dp[target];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        int total = accumulate(nums.begin(), nums.end(), 0);\n        if (total % 2 != 0) return false;\n        int target = total / 2;\n        vector<bool> dp(target + 1, false); dp[0] = true;\n        for (int x : nums) {\n            for (int j = target; j >= x; j--) dp[j] = dp[j] || dp[j - x];\n        }\n        return dp[target];\n    }\n};"
            }
          },
          {
            "id": "q-coin-change",
            "title": "Coin Change",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/coin-change/",
            "statement": "Return the fewest number of coins that you need to make up that amount.",
            "examples": [
              {
                "input": "coins = [1,2,5], amount = 11",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= coins.length <= 12",
              "1 <= amount <= 10^4"
            ],
            "approach": "Unbounded Knapsack DP.",
            "complexity": "Time: O(N * Amount), Space: O(Amount)",
            "code": {
              "python": "class Solution:\n    def coinChange(self, coins: list[int], amount: int) -> int:\n        dp = [float('inf')] * (amount + 1); dp[0] = 0\n        for coin in coins:\n            for a in range(coin, amount + 1):\n                dp[a] = min(dp[a], 1 + dp[a - coin])\n        return dp[amount] if dp[amount] != float('inf') else -1",
              "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1]; Arrays.fill(dp, amount + 1); dp[0] = 0;\n        for (int coin : coins) {\n            for (int a = coin; a <= amount; a++) dp[a] = Math.min(dp[a], 1 + dp[a - coin]);\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        vector<int> dp(amount + 1, amount + 1); dp[0] = 0;\n        for (int coin : coins) {\n            for (int a = coin; a <= amount; a++) dp[a] = min(dp[a], 1 + dp[a - coin]);\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n};"
            }
          },
          {
            "id": "q-coin-change-ii",
            "title": "Coin Change II",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/coin-change-ii/",
            "statement": "Return the number of combinations that make up that amount.",
            "examples": [
              {
                "input": "amount = 5, coins = [1,2,5]",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= amount <= 5000"
            ],
            "approach": "Unbounded Knapsack counting combinations.",
            "complexity": "Time: O(N * Amount), Space: O(Amount)",
            "code": {
              "python": "class Solution:\n    def change(self, amount: int, coins: list[int]) -> int:\n        dp = [0] * (amount + 1); dp[0] = 1\n        for coin in coins:\n            for a in range(coin, amount + 1): dp[a] += dp[a - coin]\n        return dp[amount]",
              "java": "class Solution {\n    public int change(int amount, int[] coins) {\n        int[] dp = new int[amount + 1]; dp[0] = 1;\n        for (int coin : coins) {\n            for (int a = coin; a <= amount; a++) dp[a] += dp[a - coin];\n        }\n        return dp[amount];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        vector<int> dp(amount + 1, 0); dp[0] = 1;\n        for (int coin : coins) {\n            for (int a = coin; a <= amount; a++) dp[a] += dp[a - coin];\n        }\n        return dp[amount];\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-subsequence-string-dp",
        "name": "Subsequence & String DP",
        "subtitle": "LCS & LIS State Matching",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 3,
        "what": "Solves string sequence matching problems using 2D DP matrix dp[i][j].",
        "when_to_use": "Longest Common Subsequence, Longest Increasing Subsequence, Edit Distance.",
        "how_to_identify": "LCS length, Edit distance, LIS.",
        "intuition": "If s1[i-1] == s2[j-1], dp[i][j] = 1 + dp[i-1][j-1]. Else dp[i][j] = max(dp[i-1][j], dp[i][j-1]).",
        "step_by_step": [
          "Initialize dp[M+1][N+1]",
          "Loop i from 1 to M, j from 1 to N",
          "If match: dp[i][j] = 1 + dp[i-1][j-1]",
          "Else dp[i][j] = max(dp[i-1][j], dp[i][j-1])"
        ],
        "time_complexity": "O(M * N)",
        "space_complexity": "O(M * N)",
        "code_snippets": {
          "python": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i-1] == text2[j-1]: dp[i][j] = 1 + dp[i-1][j-1]\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]",
          "java": "public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    return dp[m][n];\n}",
          "cpp": "int longestCommonSubsequence(string text1, string text2) {\n    int m = text1.length(), n = text2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1[i - 1] == text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];\n            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    return dp[m][n];\n}"
        },
        "questions": [
          {
            "id": "q-longest-common-subsequence",
            "title": "Longest Common Subsequence",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/longest-common-subsequence/",
            "statement": "Given two strings text1 and text2, return the length of their longest common subsequence.",
            "examples": [
              {
                "input": "text1 = \"abcde\", text2 = \"ace\"",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= text1.length, text2.length <= 1000"
            ],
            "approach": "2D DP grid string comparison.",
            "complexity": "Time: O(M * N), Space: O(M * N)",
            "code": {
              "python": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        m, n = len(text1), len(text2)\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if text1[i-1] == text2[j-1]: dp[i][j] = 1 + dp[i-1][j-1]\n                else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n        return dp[m][n]",
              "java": "class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length(), n = text2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (text1.charAt(i - 1) == text2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        return dp[m][n];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        int m = text1.length(), n = text2.length();\n        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (text1[i - 1] == text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];\n                else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        return dp[m][n];\n    }\n};"
            }
          },
          {
            "id": "q-longest-increasing-subsequence",
            "title": "Longest Increasing Subsequence",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/longest-increasing-subsequence/",
            "statement": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
            "examples": [
              {
                "input": "nums = [10,9,2,5,3,7,101,18]",
                "output": "4"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 2500"
            ],
            "approach": "Patience sorting Binary Search O(N log N) or 1D DP O(N^2).",
            "complexity": "Time: O(N log N), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def lengthOfLIS(self, nums: list[int]) -> int:\n        tails = []\n        for x in nums:\n            idx = bisect_left(tails, x)\n            if idx == len(tails): tails.append(x)\n            else: tails[idx] = x\n        return len(tails)",
              "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        int[] tails = new int[nums.length]; int len = 0;\n        for (int x : nums) {\n            int i = 0, j = len;\n            while (i < j) {\n                int m = (i + j) / 2;\n                if (tails[m] < x) i = m + 1; else j = m;\n            }\n            tails[i] = x;\n            if (i == len) len++;\n        }\n        return len;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> tails;\n        for (int x : nums) {\n            auto it = lower_bound(tails.begin(), tails.end(), x);\n            if (it == tails.end()) tails.push_back(x);\n            else *it = x;\n        }\n        return tails.size();\n    }\n};"
            }
          },
          {
            "id": "q-edit-distance",
            "title": "Edit Distance",
            "difficulty": "Hard",
            "estimated_minutes": 25,
            "leetcode_url": "https://leetcode.com/problems/edit-distance/",
            "statement": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).",
            "examples": [
              {
                "input": "word1 = \"horse\", word2 = \"ros\"",
                "output": "3"
              }
            ],
            "constraints": [
              "0 <= word1.length, word2.length <= 500"
            ],
            "approach": "2D DP edit operations matrix.",
            "complexity": "Time: O(M * N), Space: O(M * N)",
            "code": {
              "python": "class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        m, n = len(word1), len(word2)\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(m + 1): dp[i][0] = i\n        for j in range(n + 1): dp[0][j] = j\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]\n                else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n        return dp[m][n]",
              "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        int m = word1.length(), n = word2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 0; i <= m; i++) dp[i][0] = i;\n        for (int j = 0; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];\n                else dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));\n            }\n        }\n        return dp[m][n];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        int m = word1.length(), n = word2.length();\n        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n        for (int i = 0; i <= m; i++) dp[i][0] = i;\n        for (int j = 0; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n                else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});\n            }\n        }\n        return dp[m][n];\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-stock-dp",
        "name": "Stock Trading DP",
        "subtitle": "State Machine Transitions",
        "difficulty": "Medium \u2192 Hard",
        "total_problems": 2,
        "what": "Models stock trading with cooldowns or transaction fees using state variables.",
        "when_to_use": "Best Time to Buy and Sell Stock with Cooldown, Best Time to Buy and Sell Stock IV.",
        "how_to_identify": "Buy sell stock cooldown, max transactions stock.",
        "intuition": "Maintain held, sold, and reset state variables across trading days.",
        "step_by_step": [
          "held = max(held, reset - price)",
          "sold = held + price",
          "reset = max(reset, prev_sold)"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def maxProfit(prices):\n    held, sold, reset = float('-inf'), 0, 0\n    for p in prices:\n        prev_sold = sold\n        sold = held + p\n        held = max(held, reset - p)\n        reset = max(reset, prev_sold)\n    return max(sold, reset)",
          "java": "public int maxProfit(int[] prices) {\n    int held = Integer.MIN_VALUE, sold = 0, reset = 0;\n    for (int p : prices) {\n        int prevSold = sold;\n        sold = held + p;\n        held = Math.max(held, reset - p);\n        reset = Math.max(reset, prevSold);\n    }\n    return Math.max(sold, reset);\n}",
          "cpp": "int maxProfit(vector<int>& prices) {\n    int held = INT_MIN, sold = 0, reset = 0;\n    for (int p : prices) {\n        int prevSold = sold;\n        sold = held + p;\n        held = max(held, reset - p);\n        reset = max(reset, prevSold);\n    }\n    return max(sold, reset);\n}"
        },
        "questions": [
          {
            "id": "q-stock-with-cooldown",
            "title": "Best Time to Buy and Sell Stock with Cooldown",
            "difficulty": "Medium",
            "estimated_minutes": 20,
            "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            "statement": "Find maximum profit with unlimited transactions subject to 1-day cooldown after selling.",
            "examples": [
              {
                "input": "prices = [1,2,3,0,2]",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= prices.length <= 5000"
            ],
            "approach": "3-state DP state machine (held, sold, reset).",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        held, sold, reset = float('-inf'), 0, 0\n        for p in prices:\n            prev_sold = sold\n            sold = held + p\n            held = max(held, reset - p)\n            reset = max(reset, prev_sold)\n        return max(sold, reset)",
              "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        int held = Integer.MIN_VALUE, sold = 0, reset = 0;\n        for (int p : prices) {\n            int prevSold = sold;\n            sold = held + p;\n            held = Math.max(held, reset - p);\n            reset = Math.max(reset, prevSold);\n        }\n        return Math.max(sold, reset);\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int held = INT_MIN, sold = 0, reset = 0;\n        for (int p : prices) {\n            int prevSold = sold;\n            sold = held + p;\n            held = max(held, reset - p);\n            reset = max(reset, prevSold);\n        }\n        return max(sold, reset);\n    }\n};"
            }
          },
          {
            "id": "q-word-break",
            "title": "Word Break",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/word-break/",
            "statement": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into space-separated dictionary words.",
            "examples": [
              {
                "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
                "output": "true"
              }
            ],
            "constraints": [
              "1 <= s.length <= 300"
            ],
            "approach": "1D DP string partition matching.",
            "complexity": "Time: O(N^2), Space: O(N)",
            "code": {
              "python": "class Solution:\n    def wordBreak(self, s: str, wordDict: list[str]) -> bool:\n        words = set(wordDict)\n        dp = [False] * (len(s) + 1); dp[0] = True\n        for i in range(1, len(s) + 1):\n            for j in range(i):\n                if dp[j] and s[j:i] in words:\n                    dp[i] = True; break\n        return dp[len(s)]",
              "java": "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        Set<String> words = new HashSet<>(wordDict);\n        boolean[] dp = new boolean[s.length() + 1]; dp[0] = true;\n        for (int i = 1; i <= s.length(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (dp[j] && words.contains(s.substring(j, i))) { dp[i] = true; break; }\n            }\n        }\n        return dp[s.length()];\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        unordered_set<string> words(wordDict.begin(), wordDict.end());\n        vector<bool> dp(s.length() + 1, false); dp[0] = true;\n        for (int i = 1; i <= s.length(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (dp[j] && words.count(s.substr(j, i - j))) { dp[i] = true; break; }\n            }\n        }\n        return dp[s.length()];\n    }\n};"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "topic-bit-manipulation",
    "name": "Bit Manipulation",
    "description": "Master binary XOR cancellation, bit counting (Brian Kernighan), bit masking, power of 2 checks, and bitwise arithmetic.",
    "icon": "Binary",
    "total_patterns": 5,
    "total_problems": 8,
    "patterns": [
      {
        "id": "pattern-xor-single-number",
        "name": "Bitwise XOR Pattern",
        "subtitle": "Cancellation & Single Numbers",
        "difficulty": "Easy \u2192 Medium",
        "total_problems": 2,
        "what": "Leverages x ^ x = 0 and x ^ 0 = x properties to cancel paired identical numbers in linear time.",
        "when_to_use": "Single Number, Single Number III.",
        "how_to_identify": "Single unique number, pair cancellation.",
        "intuition": "XORing all elements cancels duplicates, leaving only the single unique value.",
        "step_by_step": [
          "Initialize res = 0",
          "XOR every element: res ^= num",
          "Return res"
        ],
        "time_complexity": "O(N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def singleNumber(nums: list[int]) -> int:\n    res = 0\n    for x in nums: res ^= x\n    return res",
          "java": "public int singleNumber(int[] nums) {\n    int res = 0;\n    for (int x : nums) res ^= x;\n    return res;\n}",
          "cpp": "int singleNumber(vector<int>& nums) {\n    int res = 0;\n    for (int x : nums) res ^= x;\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-single-number",
            "title": "Single Number",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/single-number/",
            "statement": "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
            "examples": [
              {
                "input": "nums = [2,2,1]",
                "output": "1"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 3 * 10^4"
            ],
            "approach": "XOR cancellation property.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def singleNumber(self, nums: list[int]) -> int:\n        res = 0\n        for x in nums: res ^= x\n        return res",
              "java": "class Solution {\n    public int singleNumber(int[] nums) {\n        int res = 0;\n        for (int x : nums) res ^= x;\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int res = 0;\n        for (int x : nums) res ^= x;\n        return res;\n    }\n};"
            }
          },
          {
            "id": "q-single-number-iii",
            "title": "Single Number III",
            "difficulty": "Medium",
            "estimated_minutes": 18,
            "leetcode_url": "https://leetcode.com/problems/single-number-iii/",
            "statement": "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements.",
            "examples": [
              {
                "input": "nums = [1,2,1,3,2,5]",
                "output": "[3,5]"
              }
            ],
            "constraints": [
              "2 <= nums.length <= 3 * 10^4"
            ],
            "approach": "XOR all numbers. Find lowest set bit diff = xor & -xor. Partition elements into two groups.",
            "complexity": "Time: O(N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def singleNumber(self, nums: list[int]) -> list[int]:\n        xor_sum = 0\n        for x in nums: xor_sum ^= x\n        diff = xor_sum & -xor_sum\n        a = b = 0\n        for x in nums:\n            if x & diff: a ^= x\n            else: b ^= x\n        return [a, b]",
              "java": "class Solution {\n    public int[] singleNumber(int[] nums) {\n        long xor = 0;\n        for (int x : nums) xor ^= x;\n        long diff = xor & -xor;\n        int a = 0, b = 0;\n        for (int x : nums) {\n            if ((x & diff) != 0) a ^= x;\n            else b ^= x;\n        }\n        return new int[]{a, b};\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> singleNumber(vector<int>& nums) {\n        long long xorSum = 0;\n        for (int x : nums) xorSum ^= x;\n        long long diff = xorSum & -xorSum;\n        int a = 0, b = 0;\n        for (int x : nums) {\n            if (x & diff) a ^= x;\n            else b ^= x;\n        }\n        return {a, b};\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bit-counting",
        "name": "Bit Counting (Kernighan's)",
        "subtitle": "Clear Lowest Set Bit n & (n - 1)",
        "difficulty": "Easy",
        "total_problems": 2,
        "what": "Clears the lowest set bit using n & (n - 1) in O(set_bits) time.",
        "when_to_use": "Number of 1 Bits, Counting Bits.",
        "how_to_identify": "Hamming weight, count set bits.",
        "intuition": "n & (n - 1) clears the rightmost set bit in binary representation.",
        "step_by_step": [
          "While n != 0: count++, n = n & (n - 1)",
          "Return count"
        ],
        "time_complexity": "O(number of set bits)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def hammingWeight(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1); count += 1\n    return count",
          "java": "public int hammingWeight(int n) {\n    int count = 0;\n    while (n != 0) { n &= (n - 1); count++; }\n    return count;\n}",
          "cpp": "int hammingWeight(int n) {\n    int count = 0;\n    while (n) { n &= (n - 1); count++; }\n    return count;\n}"
        },
        "questions": [
          {
            "id": "q-number-of-1-bits",
            "title": "Number of 1 Bits",
            "difficulty": "Easy",
            "estimated_minutes": 8,
            "leetcode_url": "https://leetcode.com/problems/number-of-1-bits/",
            "statement": "Write a function that takes the binary representation of a positive integer and returns the number of set bits.",
            "examples": [
              {
                "input": "n = 11",
                "output": "3"
              }
            ],
            "constraints": [
              "1 <= n <= 2^31 - 1"
            ],
            "approach": "Brian Kernighan's Algorithm (n &= n - 1).",
            "complexity": "Time: O(set bits), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        count = 0\n        while n: n &= (n - 1); count += 1\n        return count",
              "java": "class Solution {\n    public int hammingWeight(int n) {\n        int count = 0;\n        while (n != 0) { n &= (n - 1); count++; }\n        return count;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int hammingWeight(int n) {\n        int count = 0;\n        while (n) { n &= (n - 1); count++; }\n        return count;\n    }\n};"
            }
          },
          {
            "id": "q-counting-bits",
            "title": "Counting Bits",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/counting-bits/",
            "statement": "Given an integer n, return an array ans of length n + 1 such that ans[i] is the number of 1's in the binary representation of i.",
            "examples": [
              {
                "input": "n = 5",
                "output": "[0,1,1,2,1,2]"
              }
            ],
            "constraints": [
              "0 <= n <= 10^5"
            ],
            "approach": "Bitwise DP: ans[i] = ans[i >> 1] + (i & 1).",
            "complexity": "Time: O(N), Space: O(1) auxiliary",
            "code": {
              "python": "class Solution:\n    def countBits(self, n: int) -> list[int]:\n        ans = [0] * (n + 1)\n        for i in range(1, n + 1):\n            ans[i] = ans[i >> 1] + (i & 1)\n        return ans",
              "java": "class Solution {\n    public int[] countBits(int n) {\n        int[] ans = new int[n + 1];\n        for (int i = 1; i <= n; i++) {\n            ans[i] = ans[i >> 1] + (i & 1);\n        }\n        return ans;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<int> countBits(int n) {\n        vector<int> ans(n + 1, 0);\n        for (int i = 1; i <= n; i++) {\n            ans[i] = ans[i >> 1] + (i & 1);\n        }\n        return ans;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-bit-masking",
        "name": "Bit Masking",
        "subtitle": "Power Set Bitmasking",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Uses integer bitmasks from 0 to (2^N - 1) to represent subsets.",
        "when_to_use": "Subsets using Bitmask.",
        "how_to_identify": "Subset generation with bitmask.",
        "intuition": "The j-th bit of integer i (1 << j) indicates whether nums[j] is included in the current subset.",
        "step_by_step": [
          "Loop i from 0 to (1 << N) - 1",
          "If (i & (1 << j)) != 0, include nums[j]"
        ],
        "time_complexity": "O(N * 2^N)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def subsets(nums):\n    n = len(nums); res = []\n    for i in range(1 << n):\n        subset = [nums[j] for j in range(n) if (i & (1 << j))]\n        res.append(subset)\n    return res",
          "java": "public List<List<Integer>> subsets(int[] nums) {\n    int n = nums.length; List<List<Integer>> res = new ArrayList<>();\n    for (int i = 0; i < (1 << n); i++) {\n        List<Integer> sub = new ArrayList<>();\n        for (int j = 0; j < n; j++) {\n            if ((i & (1 << j)) != 0) sub.add(nums[j]);\n        }\n        res.add(sub);\n    }\n    return res;\n}",
          "cpp": "vector<vector<int>> subsets(vector<int>& nums) {\n    int n = nums.size(); vector<vector<int>> res;\n    for (int i = 0; i < (1 << n); i++) {\n        vector<int> sub;\n        for (int j = 0; j < n; j++) {\n            if (i & (1 << j)) sub.push_back(nums[j]);\n        }\n        res.push_back(sub);\n    }\n    return res;\n}"
        },
        "questions": [
          {
            "id": "q-subsets-bitmask",
            "title": "Subsets using Bitmask",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/subsets/",
            "statement": "Generate all subsets of nums using bitmasking.",
            "examples": [
              {
                "input": "nums = [1,2]",
                "output": "[[],[1],[2],[1,2]]"
              }
            ],
            "constraints": [
              "1 <= nums.length <= 10"
            ],
            "approach": "Iterate integers 0 to 2^N - 1 and inspect bit flags.",
            "complexity": "Time: O(N * 2^N), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        n = len(nums); res = []\n        for i in range(1 << n):\n            res.append([nums[j] for j in range(n) if (i & (1 << j))])\n        return res",
              "java": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        int n = nums.length; List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < (1 << n); i++) {\n            List<Integer> sub = new ArrayList<>();\n            for (int j = 0; j < n; j++) if ((i & (1 << j)) != 0) sub.add(nums[j]);\n            res.add(sub);\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        int n = nums.size(); vector<vector<int>> res;\n        for (int i = 0; i < (1 << n); i++) {\n            vector<int> sub;\n            for (int j = 0; j < n; j++) if (i & (1 << j)) sub.push_back(nums[j]);\n            res.push_back(sub);\n        }\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-power-of-two-bits",
        "name": "Power of Two & Bit Operations",
        "subtitle": "O(1) Bitwise Checks",
        "difficulty": "Easy",
        "total_problems": 2,
        "what": "Checks if n > 0 and (n & (n - 1)) == 0 to determine if n is a power of two.",
        "when_to_use": "Power of Two, Reverse Bits.",
        "how_to_identify": "Power of two check, binary reverse.",
        "intuition": "A positive integer n is a power of 2 if and only if it has exactly one set bit in binary representation.",
        "step_by_step": [
          "Return n > 0 and (n & (n - 1)) == 0"
        ],
        "time_complexity": "O(1)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def isPowerOfTwo(n: int) -> bool:\n    return n > 0 and (n & (n - 1)) == 0",
          "java": "public boolean isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}",
          "cpp": "bool isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}"
        },
        "questions": [
          {
            "id": "q-power-of-two",
            "title": "Power of Two",
            "difficulty": "Easy",
            "estimated_minutes": 5,
            "leetcode_url": "https://leetcode.com/problems/power-of-two/",
            "statement": "Given an integer n, return true if it is a power of two. Otherwise, return false.",
            "examples": [
              {
                "input": "n = 16",
                "output": "true"
              }
            ],
            "constraints": [
              "-2^31 <= n <= 2^31 - 1"
            ],
            "approach": "Bitwise check: n > 0 and (n & (n - 1)) == 0.",
            "complexity": "Time: O(1), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        return n > 0 and (n & (n - 1)) == 0",
              "java": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n > 0 && (n & (n - 1)) == 0;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        return n > 0 && (n & (n - 1)) == 0;\n    }\n};"
            }
          },
          {
            "id": "q-reverse-bits",
            "title": "Reverse Bits",
            "difficulty": "Easy",
            "estimated_minutes": 10,
            "leetcode_url": "https://leetcode.com/problems/reverse-bits/",
            "statement": "Reverse bits of a given 32-bit unsigned integer.",
            "examples": [
              {
                "input": "n = 00000010100101000001111010011100",
                "output": "964176192"
              },
              {
                "input": "n = 43261596",
                "output": "964176192"
              }
            ],
            "constraints": [
              "32-bit integer"
            ],
            "approach": "Shift result left, extract lowest bit of n, shift n right.",
            "complexity": "Time: O(32) = O(1), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def reverseBits(self, n: int) -> int:\n        res = 0\n        for _ in range(32):\n            res = (res << 1) | (n & 1)\n            n >>= 1\n        return res",
              "java": "public class Solution {\n    public int reverseBits(int n) {\n        int res = 0;\n        for (int i = 0; i < 32; i++) {\n            res = (res << 1) | (n & 1);\n            n >>>= 1;\n        }\n        return res;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        uint32_t res = 0;\n        for (int i = 0; i < 32; i++) {\n            res = (res << 1) | (n & 1);\n            n >>= 1;\n        }\n        return res;\n    }\n};"
            }
          }
        ]
      },
      {
        "id": "pattern-sum-without-plus",
        "name": "Bitwise Addition",
        "subtitle": "XOR & Carry Masking",
        "difficulty": "Medium",
        "total_problems": 1,
        "what": "Calculates sum of two integers without + or - using XOR sum and AND carry.",
        "when_to_use": "Sum of Two Integers.",
        "how_to_identify": "Sum without plus operator.",
        "intuition": "a ^ b calculates sum without carry. (a & b) << 1 calculates carry. Repeat until carry == 0.",
        "step_by_step": [
          "While b != 0: carry = (a & b) << 1, a = a ^ b, b = carry",
          "Return a"
        ],
        "time_complexity": "O(32) = O(1)",
        "space_complexity": "O(1)",
        "code_snippets": {
          "python": "def getSum(a: int, b: int) -> int:\n    MASK = 0xFFFFFFFF\n    MAX_INT = 0x7FFFFFFF\n    while b != 0:\n        a, b = (a ^ b) & MASK, ((a & b) << 1) & MASK\n    return a if a <= MAX_INT else ~(a ^ MASK)",
          "java": "public int getSum(int a, int b) {\n    while (b != 0) {\n        int carry = (a & b) << 1;\n        a = a ^ b;\n        b = carry;\n    }\n    return a;\n}",
          "cpp": "int getSum(int a, int b) {\n    while (b != 0) {\n        unsigned int carry = (unsigned int)(a & b) << 1;\n        a = a ^ b;\n        b = carry;\n    }\n    return a;\n}"
        },
        "questions": [
          {
            "id": "q-sum-of-two-integers",
            "title": "Sum of Two Integers",
            "difficulty": "Medium",
            "estimated_minutes": 15,
            "leetcode_url": "https://leetcode.com/problems/sum-of-two-integers/",
            "statement": "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
            "examples": [
              {
                "input": "a = 1, b = 2",
                "output": "3"
              }
            ],
            "constraints": [
              "-1000 <= a, b <= 1000"
            ],
            "approach": "XOR sum + AND carry shift loop.",
            "complexity": "Time: O(1), Space: O(1)",
            "code": {
              "python": "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        MASK = 0xFFFFFFFF\n        MAX_INT = 0x7FFFFFFF\n        while b != 0:\n            a, b = (a ^ b) & MASK, ((a & b) << 1) & MASK\n        return a if a <= MAX_INT else ~(a ^ MASK)",
              "java": "class Solution {\n    public int getSum(int a, int b) {\n        while (b != 0) {\n            int carry = (a & b) << 1;\n            a = a ^ b;\n            b = carry;\n        }\n        return a;\n    }\n}",
              "cpp": "class Solution {\npublic:\n    int getSum(int a, int b) {\n        while (b != 0) {\n            unsigned int carry = (unsigned int)(a & b) << 1;\n            a = a ^ b;\n            b = carry;\n        }\n        return a;\n    }\n};"
            }
          }
        ]
      }
    ]
  }
];

export default dsaTopics;
