import React from "react";
// import FileView from "./FileView";

export default function FileDetailsView(props: { file: any, onFileDetailsViewChange: any }){
    const { file } = props.file;
    const { onFileDetailsViewChange } = props.onFileDetailsViewChange;
    const [fileData, setFileData] = React.useState();

    const onTableViewChangeClick = () => {
      props.onFileDetailsViewChange(false);
    }
    // const [tableView, setTableView] = React.useState(true);
    return (
    <div className="ml-4 mb-6">
      <button className="dark:active-bg-white-20 linear rounded-[20px] bg-lightPrimary px-4 py-2 mt-[20px] text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      onClick={() => { console.log(file); onTableViewChangeClick();}}
      >
          back
      </button>
      {/* <FileView file={props.file}></FileView> */}
    </div>
    );
  }