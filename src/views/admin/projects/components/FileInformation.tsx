
import { useColorModeValue } from '@chakra-ui/react';
import Progress from 'components/progress';
import { FcAlarmClock } from 'react-icons/fc';
import Card from './Card';

const FileInformation = (props: { file: any}) => {
    const { file  } = props;
    let activeColor = useColorModeValue('gray.700', 'white');

  return (
    <Card color={activeColor} extra={"bg-[#000] mt-3 !z-5 overflow-hidden hover:bg-brand-300"  }>
      {/* HistoryCard Header */}
      <div color={activeColor}  className="flex items-center justify-between rounded-t-3xl p-3  sm:ml-4 sm:mr-4">
        <div className="dark:text-white">
          <p className='text-lg font-bold '>{file.name}</p>
          <p color={activeColor}  className="text-xs dark:text-white">FileId : {file.fileId}</p>
          { file.people && file.people.length>0 ? <p  className="text-xs font-bold dark:text-white">{file.people[0].firstName} {file.people[0].lastName} </p> : "" }
          
        </div>
        <div className=" dark:text-white">
          <p  className='text-lg font-bold text-end'>{file.fileOwner}</p>
          <p  className="text-xs dark:text-white text-end">FileId Owner</p>
        </div>
      </div>
      <div className="flex items-center justify-center  p-4">
        <p className='text-[40px] text-center font-bold '> 
            ${new Intl.NumberFormat("en-US").format(file.loanAmount)} 
        </p>
      </div>
      <div className="flex items-center justify-between rounded-t-3xl p-3 border-b sm:ml-4 sm:mr-4">
        <div className=" dark:text-white">
          <p className='text-lg font-bold '>{file.lender}</p>
          <p  className="text-sm dark:text-white">Lender</p>
        </div>
        <div className=" dark:text-white">
          <p  className='text-lg font-bold '>{file.fileOwner}</p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-t-3xl p-3 sm:ml-4 sm:mr-4">
        <div className="md:w-[230px]  dark:text-white">
          <Progress width="w-full" value={file.progress} />
          <p  className="text-xs  dark:text-white">Tasks and Requests Complete</p>
        </div>
        <div className=" dark:text-white">
        <p className="flex items-center justify-between text-sm font-bold  dark:text-white text-lg font-bold ">
            <FcAlarmClock style={{"width":"25px","height":"25px"}} className="me-1 text-green-500 dark:text-green-300" />
            <span className=" text-lg font-bold " 
            
            >{file.durationOfProcess}</span>
          </p>
          {/* <p  className='text-lg font-bold '>{file.durationOfProcess}</p> */}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-t-3xl p-3 sm:ml-4 sm:mr-4">
        <div className=" dark:text-white">
          <p className="text-lg font-bold  pt-4">{file.phase}</p>
          <p  className="text-sm  dark:text-white">Phase</p>
        </div>
        <div className=" dark:text-white">
          <p  className='text-[30px] font-bold text-center'
          style={file.probabilityToFund>60 ? {color:'rgb(0 155 0)'} :file.probabilityToFund<30 ? {color:'rgb(232 180 0)'} : {color:'rgb(255 0 0)'}}
          >{file.probabilityToFund}%</p>
          <p  className="text-sm  dark:text-white text-center">Probability to Fund</p>
        </div>
      </div>

      
    </Card>
  );
};

export default FileInformation;
