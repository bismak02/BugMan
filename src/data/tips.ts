export interface PreventionTip {
  id: number;
  title: string;
  description: string;
  category: string;
}

export const PREVENTION_TIPS: PreventionTip[] = [
  {
    id: 1,
    title: "Seal cracks to prevent intrusion.",
    description: "Inspect the exterior perimeter of your foundation, window frames, door sweeps, and pipe penetrations. Seal gaps with silicone caulking or copper mesh to stop pests before they enter.",
    category: "Exclusion"
  },
  {
    id: 2,
    title: "Clean baseboards, cabinets, and countertops regularly.",
    description: "Crumbs, grease films, and food residue in deep cabinet corners are primary attractants for ants, roaches, and rodents. Regular wipedowns with mild detergents eliminate scent trails.",
    category: "Sanitation"
  },
  {
    id: 3,
    title: "Store all food in airtight containers.",
    description: "Pantry pests like beetles and weevils easily penetrate plastic bags and cardboard cereal boxes. Transition dry grains, cereals, pet kibble, and sugars into sealed glass or hard plastic canisters.",
    category: "Food Storage"
  },
  {
    id: 4,
    title: "Never leave food (including pet food) outside.",
    description: "Outdoor bowls, grease under barbecue grills, and unsealed bird feed attract raccoons, rodents, wasps, and ants directly to your patio and foundation walls. Bring pet bowls indoors after feeding.",
    category: "Exterior Yard"
  },
  {
    id: 5,
    title: "Clear all debris, tools, and garbage.",
    description: "Piles of damp firewood, fallen leaves, construction scraps, and open trash cans provide ideal harborage for termites, earwigs, and spiders. Keep firewood stored at least 20 feet away from your home.",
    category: "Yard Maintenance"
  }
];
