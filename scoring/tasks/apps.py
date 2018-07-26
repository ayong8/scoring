from django.apps import AppConfig


class TasksConfig(AppConfig):
    name = 'scoring.tasks'

    verbose_name = "Tasks"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """
        pass
