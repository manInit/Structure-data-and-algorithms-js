const stackHTML = `
  <h1>Структуры данных и алгоритмы с визуализацией</h1>
  <div class="container">
    <h2>Стек</h2>
    <div class="content">
      <div class="content__code code">
        <pre>
           <code class="language-javascript">
class Stack {
  _values = {}
  _length = 0

  get size() {
    return this._length;
  }

  values() {
    return Object.values(this._values);
  }

  push(elem) {
    this._values[this._length++] = elem;
  }

  pop() {
    if (this._length === 0) return null;

    this._length--;
    const lastElem = this._values[this._length];
    delete this._values[this._length];

    return lastElem;
  }

  getTopElement() {
    return this._values[this._length - 1];
  }
}

           </code>
        </pre>
      </div>
      <div class="content__visual visual"></div>
    </div>
  </div>
`;

export default stackHTML;