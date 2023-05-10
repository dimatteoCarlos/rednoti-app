
export function showImgFn(img) {
  return !!img ? img.substring(img.lastIndexOf('.') + 1).length === 3 : false;
}

export function getItem(data, id) {
  return data.find((x)=>x.id==id);
}