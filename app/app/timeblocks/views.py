from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

class RenderAllTimeblock(APIView):
    pass

class WriteTimeblock(APIView):

    def post(self, request, format=None):

        ## 참고용!!!
        user = request.user

        serializer = serializers.InputImageSerializer(data=request.data)


        if serializer.is_valid():

            serializer.save(creator=user)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            print(serializer.errors)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
