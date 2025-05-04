import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    private static final int MOD = 1_000_000_007;
    boolean[] visited;
    Graph g;
    
    private class Graph {
        private Map<Integer, LinkedList<Integer>> nb;

        public Graph(int n) {
            nb = new HashMap<Integer, LinkedList<Integer>>();
            for (int i = 0; i < n; ++i) {
                nb.put(i, new LinkedList<Integer>());
            }
        }

        private void addNb(int node1, int node2) {
            nb.get(node1).add(node2);
        }

        private List<Integer> getNb(int node) {
            return nb.get(node);
        }
    }
    
    class Count {
        long strong, weak;
        Count(long strong, long weak) {
            this.strong = strong;
            this.weak = weak;
        }
    }
    
    private Count compute(int node) {
        visited[node] = true;
        List<Integer> nb = g.getNb(node);
        int cnb = 0;
        for (int nei : nb) {
            if (!visited[nei]) {
                cnb++;
            }
        }
        if (cnb == 0) {
            return new Count(0, 1);
        }
        Count[] count = new Count[cnb];
        int last = 0;
        for (int nei : nb) {
            if (!visited[nei]) {
                count[last++] = compute(nei);
            }
        }
        Count res = new Count(0, 0);
        // Weak -> all have different color & strong.
        res.weak = 1;
        for (int i = 0; i < cnb; i++) {
            res.weak = (res.weak * count[i].strong) % MOD;
        }
        // Strong -> All strong for the other color or
        // strong+weak for this color, but at least one of this color.
        // prod(StrongOther+StrongThis+WeakThis) - prod(StrongOther)
        res.strong = 1;
        long prodStrong = 1;
        for (int i = 0; i < cnb; i++) {
            res.strong = (res.strong *(2 * count[i].strong + count[i].weak)) % MOD;
            prodStrong = (prodStrong * count[i].strong) % MOD;
        }
        res.strong = (res.strong + MOD - prodStrong) % MOD;
        return res;
    }
    
    private void solve() {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        g = new Graph(n);
        for(int a0 = 0; a0 < n-1; a0++){
            int u = in.nextInt() - 1;
            int v = in.nextInt() - 1;
            g.addNb(u, v);
            g.addNb(v, u);
        }
        visited = new boolean[n];
        Count res = compute(0);
        System.out.println((2 * res.strong) % MOD);
    }

    public static void main(String[] args) {
        new Solution().solve();
    }
}
