export const createPhoto = ( photo ) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/photos',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: photo
    })
  )
}
