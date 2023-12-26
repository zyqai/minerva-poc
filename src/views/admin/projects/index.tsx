

// Chakra imports
import { useColorModeValue } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"
import ProjectListTable from './components/ProjectListTable';
import tableDataComplex from './variables/tableDataComplex';

// Custom components

export default function ProjectsPage() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <div>
      <ProjectListTable  tableData={tableDataComplex} />
     </div>

  );
}
