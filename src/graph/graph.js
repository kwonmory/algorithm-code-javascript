"use strict";
var Graph = /** @class */ (function () {
    function Graph(v) {
        this.edges = 0; // 간석 개수
        this.vertics = v;
        this.adj = [];
        this.marked = new Array(v).fill(false);
        for (var i = 0; i < this.vertics; ++i) {
            this.adj[i] = [];
        }
    }
    // 인접 행렬 방식
    Graph.prototype.addEdge = function (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    };
    Graph.prototype.dfs = function (v) {
        this.marked.fill(false);
        this.dfsFunc(v);
    };
    Graph.prototype.bfs = function (v) {
        this.marked.fill(false);
        this.bfsFunc(v);
    };
    Graph.prototype.dfsFunc = function (v) {
        this.marked[v] = true;
        console.log("\uBC29\uBB38 -> " + v);
        for (var _i = 0, _a = this.adj[v]; _i < _a.length; _i++) {
            var w = _a[_i];
            if (!this.marked[w]) {
                this.dfsFunc(Number(w));
            }
        }
    };
    Graph.prototype.bfsFunc = function (v) {
        var queue = [];
        this.marked[v] = true;
        queue.push(v);
        while (queue.length !== 0) {
            var nextTarget = queue.shift();
            console.log("\uBC29\uBB38 -> " + nextTarget);
            for (var _i = 0, _a = this.adj[nextTarget]; _i < _a.length; _i++) {
                var w = _a[_i];
                if (!this.marked[w]) {
                    queue.push(w);
                    this.marked[w] = true;
                }
            }
        }
    };
    Graph.prototype.showGraph = function () {
        // 처음부터 연결되어있는 부분 다 보여주는 메서드
        for (var i = 0; i < this.vertics; i++) {
            console.log("[" + i + "\uBC88\uC9F8]");
            for (var j = 0; j < this.vertics; j++) {
                if (this.adj[i][j] !== undefined) {
                    console.log(this.adj[i][j] + ' ');
                }
            }
        }
    };
    return Graph;
}());
/*
    테스트 공간
 */
var a = new Graph(5);
a.addEdge(0, 1);
a.addEdge(0, 2);
a.addEdge(1, 3);
a.addEdge(2, 4);
a.showGraph();
a.dfs(0); // 0, 1, 3, 2, 4
a.bfs(0); // 0, 1, 2, 3, 4
