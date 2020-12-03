import Mock from 'mockjs'
import file from './file'
const mocks = [
  ...file
]
for (const item of mocks) {
  Mock.mock(item.url, item.type, item.response)
}