import { styled } from '@mui/system';
import SquareWrapper from "../../../components/layout/square-wrapper"

const SquareWrapperWithShadow = styled(SquareWrapper)({
    boxShadow: "4px 4px 0px 0px #39aaf8",
});

const EmployyelImg = ({ imgSrc, alt, ...props }) => (
    <SquareWrapperWithShadow sx={{ mb: 3 }}>
        <img src={imgSrc} alt={alt ?? 'None'} />
    </SquareWrapperWithShadow>
)

export default EmployyelImg
