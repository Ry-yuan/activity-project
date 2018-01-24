import Mock from 'mockjs'

export default {
    mockData(){
        // paper页面 mock
        Mock.mock('/api/paper',{
            'code':'0',
            'items|5-10':[
                    {
                        'report_id':'@id',
                        'name':'@cname',
                        'last_week_plan':'@sentence(5)',
                        'next_week_plan':'@sentence(3)',
                        'this_week_summary':'@sentence(3)',
                        'importance':'@sentence(4)',
                        'time':'@date("yyyy-MM-dd")' 
                    }
                ]
        });

        // manage 的mock数据
        Mock.mock('/api/manage',{
            'code':'0',
            'items|5-8':[
                    {
                        'follower':'@cname',
                        'content':'@sentence(2)',
                        'submit_case':'@sentence(2)',
                        'submit':'@sentence(3)',
                        'time':'@date("yyyy-MM-dd")' 
                    }
                ]
        });

        // follow页面的mock数据
        Mock.mock('/api/follow',{
            'code':'0',
            'items|5-8':[
                    {
                        'follower':'@cname',
                        'content':'@sentence(2)',
                        'startTime':'@date("yyyy-MM-dd")' ,
                        'endTime':'@date("yyyy-MM-dd")',
                        'tips':'@sentence(2)',
                        'status|0-1':1
                    }
                ]
        });
    }
}