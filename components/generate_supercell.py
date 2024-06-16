import argparse
import os
import pymatgen as pm

def generate_supercell(input_file, output_dir):
    # Load the input structure
    structure = pm.Structure.from_file(input_file)

    # Generate a 2x2 supercell
    supercell = structure.repeat(2, 2, 1)

    # Save the supercell to the output directory
    supercell.to(filename=os.path.join(output_dir, "supercell.cif"),
                 fmt="cif")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a supercell of a 2D material")
    parser.add_argument("input_file", help="Path to the input structure file")
    parser.add_argument("output_dir", help="Path to the output directory")
    args = parser.parse_args()

    generate_supercell(args.input_file, args.output_dir)
