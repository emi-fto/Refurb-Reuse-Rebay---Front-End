import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <TextInput
        leftSection={<IconSearch size="1rem" stroke={1.5} />}
        w="500px"
        variant="filled"
        size="md"
        radius="xl"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
}

export default Search;
