type TMods = Record<string, boolean | string>

/**
 *
 * @param cls основной класс
 * @param mods модификаторы класса, добавляются при условии
 * @param additional доп. классы
 */
export function classNames(cls: string, mods: TMods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}