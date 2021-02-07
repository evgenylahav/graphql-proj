from flask import Flask
from flask_graphql import GraphQLView
from graphql import GraphQLSchema, GraphQLObjectType, GraphQLField, GraphQLString

event_type = GraphQLObjectType(
    name='event',
    fields={
        'name': GraphQLField(
            type_=GraphQLString,
            resolver=lambda root, args, *_: "euruption"
        ),
        'description': GraphQLField(
            type_=GraphQLString,
            resolver=lambda root, args, *_: "best song"
        ),
        'talks': GraphQLField(
            type_=GraphQLString,
            resolver=lambda root, args, *_: "search youtube"
        )

    }
)


schema = GraphQLSchema(
    query=GraphQLObjectType(
        name='RootQueryType',
        fields={
            'event': GraphQLField(
                event_type,
                resolver=lambda root, args, *_: event_type
            )
        }
    )
)


app = Flask(__name__)
app.add_url_rule(
   '/graphql',
   view_func=GraphQLView.as_view(
      'graphql',
      schema=schema,
      graphiql=True
   )
)
