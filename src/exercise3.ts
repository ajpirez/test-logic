export class BinaryTree {
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current: TreeNode = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = node;
                    break;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = node;
                    break;
                }
            }
        }
    }

    search(value: number): boolean {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    printInOrder(): void {
        const values: number[] = [];
        const traverse = (node: TreeNode | null) => {
            if (node) {
                traverse(node.left);
                values.push(node.value);
                traverse(node.right);
            }
        };
        traverse(this.root);
        // console.log(values);
    }
}

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(8);
// console.log(tree)

const found = tree.search(4);
console.log(found);

tree.printInOrder();

//BinaryTree tiene una complejidad temporal de O(n) en la impresión
// ya que ejecuta todos los nodos al menos una ves
//la operación de inserción y búsqueda tiene una complejidad temporal
//en el mejor de los casos de O(logn) ahora si el arbol esta completamente
//desbalanceado estas inserciones y busquedas respectivamente, serian O (n)