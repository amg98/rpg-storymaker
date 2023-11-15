const singletonBag: Record<string, object> = {}

export const shared = <T extends object>(name: string, factory: () => T) => {
    if (name in singletonBag) return singletonBag[name]
    singletonBag[name] = factory()
    return singletonBag
}
