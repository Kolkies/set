'use strict'

export class SuperchargedSet<T> extends Set<T> {
  /**
   * Create a new set instance of the given `values`.
   *
   * @param {Iterable} values
   *
   * @returns {SuperchargedSet}
   */
  static of<T> (values?: Iterable<T>): SuperchargedSet<T> {
    return new this<T>(values)
  }

  /**
   * Determine whether the set is empty (contains no entries).
   *
   * @returns {Boolean}
   */
  isEmpty (): boolean {
    return this.size === 0
  }

  /**
   * Determine whether the set is not empty (contains entries).
   *
   * @returns {Boolean}
   */
  isNotEmpty (): boolean {
    return !this.isEmpty()
  }

  /**
   * Transforms this set into an array.
   *
   * @returns Array
   */
  toArray (): T[] {
    return Array.from(this)
  }

  /**
   * Returns the first item in the set matching the given `predicate`
   * function, or `undefined` if no such item was found.
   *
   * @param predicate
   *
   * @returns {*}
   */
  find (predicate: (item: T, set: SuperchargedSet<T>) => T | undefined): T | undefined {
    for (const value of this.values()) {
      if (predicate(value, this)) {
        return value
      }
    }
  }

  /**
   * Returns an array containing the results of applying the
   * given `transform` function to each item in the set.
   *
   * @param {Function} transform
   *
   * @returns {Array}
   */
  map<R> (transform: (item: T, set: SuperchargedSet<T>) => R): R[] {
    const results: R[] = []

    this.forEach((item) => {
      results.push(transform(item, this))
    })

    return results
  }
}
