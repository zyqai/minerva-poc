import React from 'react';
import SearchIcon from './SearchIcon';
import { MdChevronRight, MdChevronLeft, MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md';
import { File } from '../variables/tableDataComplex';

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
import Progress from 'components/progress';
import Card from './Card';

// import FileInformation from './FileInformation';
// import FileDetailsView from '../data-tables/FileDetailsView';

function ProjectListTable(props: { tableData: any }) {
  const { tableData } = props;
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  let defaultData = tableData;
  const [tableView, setTableView] = React.useState(true);
  const [fileDetailsView, setFileDetailsView] = React.useState(false);
  const [listViewCount, setListViewCount] = React.useState(6);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const createPages = (count: number) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };
  const columns = [
    columnHelper.accessor('fileId', {
      id: 'fileId',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          File Id#
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white cursor-pointer hover:text-gray-600"  
            onClick={() => {
              onFileViewClick(info.getValue(), true);
            }}
        >
         {/* <NavLink href={"./files/" + (info.getValue())} className="mt-0 w-max lg:pt-10">{info.getValue()} </NavLink> */}
         {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('fileOwner', {
      id: 'fileOwner',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">File Owner</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    
    
    columnHelper.accessor('loanAmount', {
      id: 'loanAmount',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Loan Amount</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          ${info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('lender', {
      id: 'lender',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Lender</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('phase', {
      id: 'phase',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Phase</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          <Progress width="w-[108px]" value={info.getValue()} />
        </div>
      ),
    }),
    columnHelper.accessor('probabilityToFund', {
      id: 'probabilityToFund',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Probability to Fund
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {
          info.getValue()>60 ? (
            <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" />
          ) : info.getValue()<30 ?  (
            <MdCancel className="me-1 text-red-500 dark:text-red-300" />
          ) : info.getValue()>=0 ?  (
            <MdOutlineError className="me-1 text-amber-500 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}%
          </p>
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const [listFilterData, setListFilterData] = React.useState(() => [...defaultData]);
  const [fileId, setFileId] = React.useState(1);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });

  const changeTableView = (setView: boolean) => { 
    setTableView(setView);
  };

  const onFileViewClick = (fileId: any, flag: any) => {
    let selectedFile = data.find(file => file.fileId === fileId);
    
    setSelectedFile(selectedFile);
    setFileId(fileId);
    setFileDetailsView(flag);
  }

  const onChangeSearchFilter = (e: any) => {
    setGlobalFilter(e.target.value);
    setListViewCount(6);
    let filterData: any[] = [];
    table.getFilteredRowModel().rows.forEach((row) => {
      filterData.push(row.original);
    });
    setListFilterData(filterData);
  }

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
    <div>
    !fileDetailsView ? 
          <Card extra={'w-full h-full pb-5 sm:overflow-auto px-6'}>

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
              <div className="flex  h-[38px] w-[400px] flex h-20 items-center justify-end px-6">
                <div className="flex border-2 justify-end dark:bg-white-20 linear rounded-[20px] bg-lightPrimary text-base font-medium text-brand-500 transition duration-200  dark:bg-white/5 dark:text-white ">
                  <div className={"linear flex p-3 cursor-pointer border-1 justify-around transition rounded-[20px] hover:bg-brand-300 " + (tableView? "bg-brand-600 text-white ":"") } onClick={() => {changeTableView(true)}}>TableView</div>
                  <div className={"linear flex p-3 cursor-pointer border-1 justify-around transition rounded-[20px] hover:bg-brand-300 " + (tableView? "":"bg-brand-600 text-white") } onClick={() => {changeTableView(false)}}>ListView</div>
                </div>
              </div>
            </div>
            {/* View Header End */}

            {tableView? <GetTableView />: <GetListsHeader /> }
          </Card> : ""
           {/* <FileDetailsView file = {selectedFile} onFileDetailsViewChange = {setFileDetailsView} /> */}
          </div>
  );


  function GetListsHeader(props: any) {
    return (
      <div><div className="block mb-5 mt-8">
         {listFilterData.map((file,index)=>{
            return index < listViewCount ? 
                          <div className="cursor-pointer h-[400px] w-[400px] mr-4" style={{"float": "left"}}
                              onClick={() => {
                                onFileViewClick(file.fileId, true);
                              }}
                          >
                            {/* <FileInformation file={file} /> */}
                          </div>
                          : ""
        })}
      </div>
      <div className="mt-6 mb-6 w-full" style={{"display": "inline-block"}}>
        {
          listFilterData.length >= listViewCount? 
              <div className={"linear w-[300px] !m-auto flex p-3 cursor-pointer border-1 justify-around transition rounded-[20px] hover:bg-brand-300 " + (tableView? "":"bg-brand-600 text-white") }
                  onClick={() => {
                    setListViewCount(listViewCount+6);
                  }}>View More Projects</div> 
                : ""
        }
        
      </div>
      </div>
    );
    
  }


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
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
            >
              <MdChevronLeft />
            </button>

            {createPages(table.getPageCount()).map((pageNumber, index) => {
              return (
                <button
                  className={`linear flex h-10 w-10 items-center justify-center rounded-full p-2 text-sm transition duration-200 ${
                    pageNumber === pageIndex + 1
                      ? 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200'
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
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 `}
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
      );
  }
}

export default ProjectListTable;
const columnHelper = createColumnHelper<File>();
