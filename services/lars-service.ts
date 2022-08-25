import { LarsMapping } from "../types";
import LarsStaticMapping from '../static-data/lars-mapping.json';

export function getLarsMappingsGrouped(): Map<string, LarsMapping[]> {
    const larsData: LarsMapping[] = LarsStaticMapping;
    let larsGroupedMap = new Map<string, LarsMapping[]>();

    larsData.map(entry => {
        let group = larsGroupedMap.get(entry.route) || [];
        group.push(entry);
        larsGroupedMap.set(entry.route, group);
    });

    return larsGroupedMap;
}