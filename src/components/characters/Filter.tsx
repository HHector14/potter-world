import FilterItem from "../ui/FiterItem"
export default function Filter() {
  return (
    <>
        <FilterItem url="/characters" label="All" />
        <FilterItem url="/characters/gryffindor" label="Gryffindor" />
        <FilterItem url="/characters/slytherin" label="Slytherin" />
        <FilterItem url="/characters/hufflepuff" label="Hufflepuff" />
        <FilterItem url="/characters/ravenclaw" label="Ravenclaw" />

    </>
  )
}