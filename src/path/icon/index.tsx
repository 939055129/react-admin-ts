/*
 * @Description: Night
 * @Date: 2021-02-03 16:34:07
 * @LastEditTime: 2021-03-16 18:25:24
 * @Version: 
 */
import {
  HomeOutlined, AccountBookFilled, AccountBookOutlined, AccountBookTwoTone, AimOutlined, AlertFilled, AlertOutlined, AlertTwoTone, AlibabaOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, AlipayCircleFilled, AlipayCircleOutlined, AlipayOutlined, AlipaySquareFilled, AliwangwangFilled, AliwangwangOutlined, AliyunOutlined, AmazonCircleFilled, AmazonOutlined, AmazonSquareFilled, AndroidFilled, AndroidOutlined, AntCloudOutlined, AntDesignOutlined, ApartmentOutlined, ApiFilled, ApiOutlined, ApiTwoTone, AppleFilled, AppleOutlined, AppstoreAddOutlined, AppstoreFilled, AppstoreOutlined, AppstoreTwoTone, AreaChartOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined, ArrowsAltOutlined, AudioFilled, AudioMutedOutlined, AudioOutlined, AudioTwoTone, AuditOutlined, BackwardFilled, BackwardOutlined, BankFilled, BankOutlined, BankTwoTone, BarChartOutlined, BarcodeOutlined, BarsOutlined, BehanceCircleFilled, BehanceOutlined, BehanceSquareFilled, BehanceSquareOutlined, BellFilled, BellOutlined, BellTwoTone, BgColorsOutlined, BlockOutlined, BoldOutlined, BookFilled, BookOutlined, BookTwoTone, BorderBottomOutlined, BorderHorizontalOutlined, BorderInnerOutlined, BorderLeftOutlined, BorderOuterOutlined, BorderOutlined, BorderRightOutlined, BorderTopOutlined, BorderVerticleOutlined, BorderlessTableOutlined, BoxPlotFilled, BoxPlotOutlined, BoxPlotTwoTone, BranchesOutlined, BugFilled, BugOutlined, BugTwoTone, BuildFilled, BuildOutlined, BuildTwoTone, BulbFilled, BulbOutlined, BulbTwoTone, CalculatorFilled, CalculatorOutlined, CalculatorTwoTone, CalendarFilled,
} from '@ant-design/icons';
import { FC } from "react"
import styled from 'styled-components';
const Wrap = styled.div`
display:flex;
flex-wrap:wrap;
align-content:flex-start;
.item{
width:100px;
display:flex;
justify-content:center;
align-items:center;
height:100px;
background-color:white;
border:0.5px #d4d4d4 dotted;
.icon{
  transition:all, 1s;}
&:hover{
  .icon{
  transition:all, 1s;
  zoom:1.5
}
}
}
`
let icons: FC[] = [
  HomeOutlined, AccountBookFilled, AccountBookOutlined, AccountBookTwoTone, AimOutlined, AlertFilled, AlertOutlined, AlertTwoTone, AlibabaOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, AlipayCircleFilled, AlipayCircleOutlined, AlipayOutlined, AlipaySquareFilled, AliwangwangFilled, AliwangwangOutlined, AliyunOutlined, AmazonCircleFilled, AmazonOutlined, AmazonSquareFilled, AndroidFilled, AndroidOutlined, AntCloudOutlined, AntDesignOutlined, ApartmentOutlined, ApiFilled, ApiOutlined, ApiTwoTone, AppleFilled, AppleOutlined, AppstoreAddOutlined, AppstoreFilled, AppstoreOutlined, AppstoreTwoTone, AreaChartOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined, ArrowsAltOutlined, AudioFilled, AudioMutedOutlined, AudioOutlined, AudioTwoTone, AuditOutlined, BackwardFilled, BackwardOutlined, BankFilled, BankOutlined, BankTwoTone, BarChartOutlined, BarcodeOutlined, BarsOutlined, BehanceCircleFilled, BehanceOutlined, BehanceSquareFilled, BehanceSquareOutlined, BellFilled, BellOutlined, BellTwoTone, BgColorsOutlined, BlockOutlined, BoldOutlined, BookFilled, BookOutlined, BookTwoTone, BorderBottomOutlined, BorderHorizontalOutlined, BorderInnerOutlined, BorderLeftOutlined, BorderOuterOutlined, BorderOutlined, BorderRightOutlined, BorderTopOutlined, BorderVerticleOutlined, BorderlessTableOutlined, BoxPlotFilled, BoxPlotOutlined, BoxPlotTwoTone, BranchesOutlined, BugFilled, BugOutlined, BugTwoTone, BuildFilled, BuildOutlined, BuildTwoTone, BulbFilled, BulbOutlined, BulbTwoTone, CalculatorFilled, CalculatorOutlined, CalculatorTwoTone, CalendarFilled,
]
export default function Icon(props: any) {
  const renderIcon = () => {
    return icons.map((Item: FC<{ style: {}, className: string }>, index: number) => {
      return (
        <div
          className="item"
          key={index}><Item style={{ fontSize: 32, }} className="icon" /></div>
      )
    })
  }
  return (
    <Wrap style={{}}>
      {renderIcon()}
    </Wrap>
  )

}
