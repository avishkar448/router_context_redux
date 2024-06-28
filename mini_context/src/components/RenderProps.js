const RenderProps = ({render}) => {
    const data={
        name:"Hardik Pandya",
        age:31
    }
  return (
    render(data)
  )
}

export default RenderProps
