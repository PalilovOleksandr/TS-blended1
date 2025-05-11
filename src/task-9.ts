interface Container<T> {
    items: T[];
    addItem: (item: T) => void;
    getItem: (index: number) => T;
}

function getLastElement<T>(container: Container<T>): T {
    return container.getItem(container.items.length - 1);
}


const numberContainer: Container<number> = {
    items: [1, 2, 3, 4, 5],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
}

const stringContainer: Container<string> = {
    items: ["Moly", "Poly", "Kolya"],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
}
stringContainer.addItem("Katya")
numberContainer.addItem(6)

console.log(getLastElement(numberContainer))