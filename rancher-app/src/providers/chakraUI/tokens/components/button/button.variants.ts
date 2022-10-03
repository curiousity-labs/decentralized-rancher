function primary() {
  const disabled = {
    bg: 'gray.500',
  }

  const loading = {
    // @todo add loading state
  }

  return {
    bg: 'white',
    color: 'gray.900',
    _hover: {
      bg: 'gray.100',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {},
    _focus: {
      outline: 'none'
    }
  }
}

const variants = {
  primary,
}

export default variants