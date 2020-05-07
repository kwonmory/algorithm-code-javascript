class Graph {
    vertics: number; // 정점 갯수
    edges: number = 0; // 간석 개수
    adj: Array<Array<number>>; // 인접 정점
    marked: boolean[];

    constructor(v: number) {
        this.vertics = v;
        this.adj = [];
        this.marked = new Array(v).fill(false);

        for (let i: number = 0; i < this.vertics; ++i) {
            this.adj[i] = [];
        }
    }

    // 인접 행렬 방식
    addEdge(v: number, w: number) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    dfs(v: number) {
        this.marked.fill(false);
        this.dfsFunc(v);
    }

    bfs(v:number) {
        this.marked.fill(false);
        this.bfsFunc(v);
    }

    dfsFunc(v: number) {
        this.marked[v] = true;
        console.log(`방문 -> ${v}`);

        for (let w of this.adj[v]) {
            if (!this.marked[w]) {
                this.dfsFunc(Number(w));
            }
        }
    }

    bfsFunc(v: number) {
        const queue: number[] = [];
        this.marked[v] = true;
        queue.push(v);

        while (queue.length !== 0) {
            const nextTarget:number = queue.shift() as number;
            console.log(`방문 -> ${nextTarget}`);

            for (let w of this.adj[nextTarget]) {
                if (!this.marked[w]) {
                    queue.push(w);
                    this.marked[w] = true;
                }
            }
        }
    }


    showGraph() {
        // 처음부터 연결되어있는 부분 다 보여주는 메서드
        for (let i = 0; i < this.vertics; i++) {
            console.log(`[${i}번째]`)
            for (let j = 0; j < this.vertics; j++) {
                if (this.adj[i][j] !== undefined) {
                    console.log(this.adj[i][j] + ' ');
                }
            }

        }
    }
}

/*
    테스트 공간
 */
const a = new Graph(5);
a.addEdge(0, 1);
a.addEdge(0, 2);
a.addEdge(1, 3);
a.addEdge(2, 4);

a.showGraph();

a.dfs(0); // 0, 1, 3, 2, 4
a.bfs(0); // 0, 1, 2, 3, 4