import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random // 一个工具类，用于生成各种随机数据
const dataList = [] //用于存放生成数据的数组
for (let index = 0; index < 26; index++) {
  const element = {
    id: index,
    title: Random.title(10, 15),
    content: Random.paragraph(2, 5), // 生成2至5个句子的文本
    image: Random.image('100x100', '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
  }
  dataList.push(element)
}
const results = [
  {
    url: '/upload/file',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          name: 'file',
          url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
        }
      }
    }
  },
  {
    url: '/getList/file',
    type: 'get',
    response: () => {
      let fileList = []
      for (let i = 0; i < 100; i++) {
        let file = {}
        file.uid = Random.id()
        file.name = Random.title(3, 5)
        file.url = Random.image('200x100', '#50B347', '#FFF', Random.title(1))
        fileList.push(file)
      }
      return {
        code: 200,
        data: {
          fileList
        }
      }
    }
  },
  {
    url: '/api/list',
    type: 'post',
    response: config => {
      const info = JSON.parse(config.body)
      const [index, size, type, total] = [info.pageIndex, info.pageSize, info.subjectId, dataList.length]
      const len = total / size
      const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
      const newDataList = dataList.slice(index * size, (index + 1) * size)
      return {
        code: 200,
        message: 'success',
        results: {
          pageIndex: index,
          pageSize: size,
          list: newDataList,
          total: total,
          totalPages: totalPages,
          type
        }
      }
    }
  }
]
export default results