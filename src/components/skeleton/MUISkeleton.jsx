import { Skeleton, Stack } from "@mui/material"

const MUISkeleton = () => {
  return (
    <Stack spacing={1} width={250}>
        <Skeleton variant='text' />
    </Stack>
  )
}
export default MUISkeleton