import React from 'react';

import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { People } from 'types/project-types';

import {
  PaginationState,
  createColumnHelper,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import SearchIcon from 'components/icons/SearchIcon';
import Card from 'components/card/Card';

function PeopleListTable(props: { tableData: any }) {
  const navigate = useNavigate();

  const bg = useColorModeValue('background.100', 'background.900');
  const { tableData } = props;
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  let defaultData = tableData;
  // const [tableView, setTableView] = React.useState(true);
  // const [fileDetailsView, setFileDetailsView] = React.useState(false);
  const [listViewCount, setListViewCount] = React.useState(6);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const addNewPeople = () => { 
    navigate("/admin/dashboards/AddPeople");
  };

  const createPages = (count: number) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };
  const columns = [
    columnHelper.accessor('firstName', {
      id: 'lastName',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          First Name#
        </p>
      ),
      cell: (info) => (
        <p
          color={activeColor}
          className="text-sm font-bold  dark:text-white cursor-pointer hover:text-gray-600"
          onClick={() => {
            onPeopleClick(info.getValue(), true);
          }}
        >
          {/* <NavLink href={"./files/" + (info.getValue())} className="mt-0 w-max lg:pt-10">{info.getValue()} </NavLink> */}
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('lastName', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Last Name
        </p>
      ),
      cell: (info) => (
        <p color={activeColor} className="text-sm font-bold dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Email</p>
      ),
      cell: (info) => (
        <p color={activeColor} className="text-sm font-bold dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('phone', {
      id: 'phone',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Phone</p>
      ),
      cell: (info) => (
        <p color={activeColor} className="text-sm font-bold dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('activeFile', {
      id: 'activeFile',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Active File
        </p>
      ),
      cell: (info) => (
        <p color={activeColor} className="text-sm font-bold dark:text-white">
          {info.getValue() ? 'Yes' : 'No'}
        </p>
      ),
    }),
  ]; // eslint-disable-next-line

  const [data, setData] = React.useState(() => [...defaultData]);
  const [listFilterData, setListFilterData] = React.useState(() => [
    ...defaultData,
  ]);
  const [peopleId, setPeopleId] = React.useState(1);
  const [selectedPeople, setSelectedPeople] = React.useState(null);
  const [{ pageIndex, pageSize }, setPagination] = React.useState<
    PaginationState
  >({
    pageIndex: 0,
    pageSize: 6,
  });
  let activeColor = useColorModeValue('gray.700', 'white');

  // const addNewProjectClick = () => {
  //   navigate('/admin/dashboards/AddProject');
  // };

  const onPeopleClick = (peopleId: any, flag: any) => {
    let selectedPeople = data.find((people) => people.peopleId === peopleId);
    selectedPeople(selectedPeople);
    setPeopleId(selectedPeople);
  };

  const onChangeSearchFilter = (e: any) => {
    setGlobalFilter(e.target.value);
    setListViewCount(6);
    let filterData: any[] = [];
    table.getFilteredRowModel().rows.forEach((row) => {
      filterData.push(row.original);
    });
    setListFilterData(filterData);
  };

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <Box bg={bg}>
      <Card bg={bg} extra={'w-full h-full pb-5 sm:overflow-auto px-6'}>
        {/* View Header Start */}
        <div className="flex justify-between max-w-full items-center rounded-xl pt-[20px]">
          <div className="flex h-[38px] w-[400px] flex-grow items-center rounded-xl bg-lightPrimary text-sm text-gray-600 dark:!bg-navy-900 dark:text-white">
            <SearchIcon />
            <input
              value={globalFilter ?? ''}
              onChange={(e: any) => onChangeSearchFilter(e)}
              type="text"
              placeholder="Search...."
              className="block w-full rounded-full bg-lightPrimary text-base text-navy-700 outline-none dark:!bg-navy-900 dark:text-white"
            />
          </div>
          <div className="flex  h-[38px] w-[400px] flex h-20 items-center justify-end px-6"></div>
          <div className="flex  h-[38px] w-[400px] flex h-20 items-center justify-end px-6">
            <Box
              mr="8px"
              className={
                'linear flex p-1 cursor-pointer border-1 justify-around border border-gray-200 transition shadow-3xl px-10 shadow-shadow-100 hover:bg-blue-500 '
              }
              onClick={() => {
                addNewPeople();
              }}
            >
              Import
            </Box>
            <Box
              className={
                'linear flex p-1 cursor-pointer border-1 justify-around border border-gray-200 transition shadow-3xl px-10 shadow-shadow-100 hover:bg-blue-500 '
              }
              onClick={() => {
                addNewPeople();
              }}
            >
              Add Person
            </Box>
          </div>
        </div>
        <GetTableView />
      </Card>
    </Box>
  );

  function GetTableView(props: any) {
    return (
      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 7)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* pagination */}
        <div className="mt-2 flex h-20 w-full items-center justify-between px-6">
          {/* left side */}
          <div className="flex items-center gap-3">
            <p className="> Show rows per page text-sm text-gray-700">
              Showing 6 rows per page
            </p>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2">
            <button
              color={activeColor}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`bg-blue-500 linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
            >
              <MdChevronLeft />
            </button>

            {createPages(table.getPageCount()).map((pageNumber, index) => {
              return (
                <button
                  color={activeColor}
                  className={`linear flex h-10 w-10 items-center justify-center rounded-full p-2 text-sm transition duration-200 ${
                    pageNumber === pageIndex + 1
                      ? 'bg-blue-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200'
                      : 'border-[1px] border-gray-400 bg-[transparent] dark:border-white dark:text-white'
                  }`}
                  onClick={() => table.setPageIndex(pageNumber - 1)}
                  key={index}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              color={activeColor}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`bg-blue-500 linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 `}
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleListTable;
const columnHelper = createColumnHelper<People>();
