import sys
import pyperclip as pc
from typing import List, Tuple, Dict, Set
from collections import defaultdict

# Directions: up, right, down, left
DIRS: List[Tuple[int, int]] = [(-1, 0), (0, 1), (1, 0), (0, -1)]

def calculate_area_and_perimeter(grid: List[str]) -> Tuple[int, int]:
    """
    Calculate area and perimeter of connected regions in the grid.
    
    Args:
        grid (List[str]): 2D grid representing the map
    
    Returns:
        Tuple[int, int]: Tuple of (part1 result, part2 result)
    """
    rows, cols = len(grid), len(grid[0])
    seen: Set[Tuple[int, int]] = set()
    part1_total = 0
    part2_total = 0

    def bfs(start_r: int, start_c: int) -> Tuple[int, Dict[Tuple[int, int], Set[Tuple[int, int]]]]:
        """
        Breadth-first search to find connected region and its perimeter.
        
        Args:
            start_r (int): Starting row
            start_c (int): Starting column
        
        Returns:
            Tuple[int, Dict]: Tuple of (area, perimeter dictionary)
        """
        area = 0
        perim_dict: Dict[Tuple[int, int], Set[Tuple[int, int]]] = defaultdict(set)
        queue = [(start_r, start_c)]
        region_seen = set()

        while queue:
            r, c = queue.pop(0)
            
            if (r, c) in region_seen:
                continue
            
            region_seen.add((r, c))
            seen.add((r, c))
            area += 1

            for dr, dc in DIRS:
                rr, cc = r + dr, c + dc
                
                # Check if out of bounds or different cell
                if (0 <= rr < rows and 0 <= cc < cols and 
                    grid[rr][cc] == grid[r][c]):
                    queue.append((rr, cc))
                else:
                    perim_dict[(dr, dc)].add((r, c))

        return area, perim_dict

    def count_side_connections(perim_dict: Dict[Tuple[int, int], Set[Tuple[int, int]]]) -> int:
        """
        Count side connections for a region's perimeter.
        
        Args:
            perim_dict (Dict): Perimeter dictionary from BFS
        
        Returns:
            int: Number of side connections
        """
        sides = 0
        for direction, points in perim_dict.items():
            perim_seen = set()
            
            for start_point in points:
                if start_point in perim_seen:
                    continue
                
                queue = [start_point]
                region_perim = set()
                
                while queue:
                    r, c = queue.pop(0)
                    
                    if (r, c) in perim_seen:
                        continue
                    
                    perim_seen.add((r, c))
                    region_perim.add((r, c))
                    
                    for dr, dc in DIRS:
                        rr, cc = r + dr, c + dc
                        if (rr, cc) in points:
                            queue.append((rr, cc))
                
                sides += 1

        return sides

    # Process the entire grid
    for r in range(rows):
        for c in range(cols):
            if (r, c) in seen:
                continue
            
            area, perim_dict = bfs(r, c)
            sides = count_side_connections(perim_dict)
            
            part1_total += area * len(perim_dict)
            part2_total += area * sides

    return part1_total, part2_total

def main():
    """Main function to read input and solve the problem."""
    # Set a high recursion limit for complex grid traversals
    sys.setrecursionlimit(10**6)

    # Read input from file
    with open('input.txt', 'r') as f:
        grid = f.read().strip().split('\n')

    # Solve the problem
    part1, part2 = calculate_area_and_perimeter(grid)

    # Print and copy results
    print(f"Part 1: {part1}")
    print(f"Part 2: {part2}")
    pc.copy(str(part1))  # Copy part1 result to clipboard

if __name__ == "__main__":
    main()