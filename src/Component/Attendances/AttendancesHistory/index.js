import React ,{useState,useEffect} from 'react';
import Header from './../../Common/Header';
import {Table} from 'react-bootstrap';
import {GetListAttendances} from './../../../api/attendances';
import moment from 'moment'
import './index.css'
export default function(){
    const [listData,setListData] = useState([]);
    useEffect(()=>{
        GetListAttendances().then(result=>{
            console.log(result);
            setListData(result.data);
        })
    },[])
    const ShowListData =()=>{
        return listData.map((item,index)=>{
            return(
                <tr  style={{padding:"15px 0"}} key={item._id}>
                    <td>{index+1}</td>
                    <td>{moment( item.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                    <td>{item.user.fullname}</td>
                    <td>{item.user.department}</td>
                    <td>{ShowShipData(item.shift)}</td>
                    <td>{item.user.email}</td>
                    <td>
                        <span style={{color:"#09A6FF",marginRight:"10px",cursor:"pointer"}} > Sửa</span>
                        <span style={{color:"#C4C4C4",cursor:"pointer"}} > Xóa</span>
                    </td>
                </tr>
            )
        })
    }
    const ShowShipData =(shift)=>{
        let text ="Sáng" ;
        let classData ="MorningClass";
        if(shift===2){
            text="Chiều";
            classData="afternoonClass"
        } 
        if(shift===3){
            text="Tối"
            classData="nightClass"
        }
        return (
            <span className={classData}>{text}</span>
        )
    }
    return(
        <div>
            <Header />
            <div>
                <div className="HeaderEditAttendances">
                    <div className="TextHeader">
                        <span style={{color:"#000000",fontWeight:"bold",fontSize:"17px"}}>Chấm Công</span><span>-></span><span>Lịch Sử Chấm Công</span>
                    </div>
                    <div className="TextContent">
                        <span style={{backgroundColor:"white",padding:"5px 15px"}}>Tất Cả</span>
                        <span>Trang 1/<span style={{color:"white"}}>1</span> </span>
                    </div>
                </div>
                <div className="ContentTable">
                    <Table className="TableDataHistory">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Nhân Viên</th>
                                <th>Văn Phòng Làm Việc</th>
                                <th>Ca</th>
                                <th>Email</th>
                                <th>Tùy Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ShowListData()
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}